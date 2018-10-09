package ch.hsr.ifs.gcs.ui

import android.Manifest
import android.arch.lifecycle.Observer
import android.content.pm.PackageManager
import android.location.Location
import android.os.Bundle
import android.preference.PreferenceManager
import android.support.v4.app.ActivityCompat
import android.support.v4.app.Fragment
import android.support.v4.content.ContextCompat
import android.support.v7.app.AppCompatActivity
import android.view.View
import ch.hsr.ifs.gcs.GCS
import ch.hsr.ifs.gcs.MainModel
import ch.hsr.ifs.gcs.R
import ch.hsr.ifs.gcs.R.drawable.abort_mission
import ch.hsr.ifs.gcs.R.layout.activity_main
import ch.hsr.ifs.gcs.driver.Input
import ch.hsr.ifs.gcs.driver.Input.Control
import ch.hsr.ifs.gcs.support.geo.LocationService
import ch.hsr.ifs.gcs.ui.mission.MissionResultsFragment
import ch.hsr.ifs.gcs.ui.mission.MissionStatusesFragment
import ch.hsr.ifs.gcs.ui.mission.need.NeedInstructionFragment
import ch.hsr.ifs.gcs.ui.mission.need.NeedItemFactory
import ch.hsr.ifs.gcs.ui.mission.need.NeedsFragment
import ch.hsr.ifs.gcs.ui.mission.need.parameter.ParameterItemFactory
import kotlinx.android.synthetic.main.activity_main.*
import org.osmdroid.config.Configuration
import org.osmdroid.tileprovider.tilesource.bing.BingMapTileSource
import org.osmdroid.util.GeoPoint
import java.util.*

class MainActivity : AppCompatActivity(), Input.Listener, LocationService.OnLocationChangedListener, ActivityCompat.OnRequestPermissionsResultCallback {

    private lateinit var fLocationService: LocationService
    private lateinit var fLocation: Location
    private lateinit var fModel: MainModel

    private var fMenuFragment = MenuFragmentID.MISSION_STATUSES_FRAGMENT
    private var fMainFragment: Fragment? = null

    private lateinit var fParameterItemFactory: ParameterItemFactory
    private lateinit var fNeedItemFactory: NeedItemFactory

    val needItemFactory get() = fNeedItemFactory
    val parameterItemFactory get() = fParameterItemFactory

    fun showMainFragment(fragment: Fragment) {
        fMainFragment = fragment
        supportFragmentManager.beginTransaction()
                .replace(R.id.mapholder, fragment)
                .commit()
    }

    fun hideMainFragment() {
        if (fMainFragment != null) {
            supportFragmentManager.beginTransaction()
                    .remove(fMainFragment)
                    .commit()
            fMainFragment = null
        }
    }

    // Activity implementation

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Configuration.getInstance().load(applicationContext, PreferenceManager.getDefaultSharedPreferences(applicationContext))

        setContentView(activity_main)

        requestLocationPermissions()

        BingMapTileSource.retrieveBingKey(this)
        val tileSource = object : BingMapTileSource(Locale.getDefault().displayName) {
            override fun getMaximumZoomLevel(): Int {
                return 19
            }
        }
        tileSource.style = BingMapTileSource.IMAGERYSET_AERIAL
        tileSource.maximumZoomLevel
        map.setTileSource(tileSource)
        map.controller.setZoom(18.0)
        map.setBuiltInZoomControls(true)

        showMenuFragment(fMenuFragment)

        leftButton.background = applicationContext.getDrawable(abort_mission)

        fLocationService = LocationService(this, this)
        fParameterItemFactory = ParameterItemFactory(this)
        fNeedItemFactory = NeedItemFactory(this)

    }

    override fun onWindowFocusChanged(hasFocus: Boolean) {
        super.onWindowFocusChanged(hasFocus)
        if (hasFocus) {
            val decorView = window.decorView
            decorView.systemUiVisibility = (View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    or View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                    or View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                    or View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                    or View.SYSTEM_UI_FLAG_FULLSCREEN
                    or View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY)
        }
    }

    override fun onResume() {
        super.onResume()
        map.onResume()
        //fDeviceScanner.start(this)
        showMenuFragment(fMenuFragment)

        fModel = (application as GCS).mainModel
        fModel.activeMenuFragment.observe(this, Observer {
            if (it == null) {
                showMenuFragment(MenuFragmentID.MISSION_STATUSES_FRAGMENT)
            } else {
                showMenuFragment(it)
            }
        })
        fModel.activeInputDevice.observe(this, Observer {
            it?.removeListener(this)
            it?.addListener(this)
        })
    }

    override fun onPause() {
        super.onPause()
        map.onPause()
        finish()
    }

    override fun onDestroy() {
        //fDeviceScanner.stop()
        super.onDestroy()
    }

    // Input.Handler implementation

    override fun onButton(control: Control) {
        @Suppress("NON_EXHAUSTIVE_WHEN")
        when (control) {
            Control.ZOOM_IN -> {
                map.controller.zoomIn()
            }
            Control.ZOOM_OUT -> {
                map.controller.zoomOut()
            }
        }
    }

    // ActivityCompat.OnRequestPermissionsResultCallback implementation

    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>, grantResults: IntArray) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
    }

    // LocationService.OnLocationChangedListener implementation

    override fun onCurrentLocationChanged(location: Location) {
        if (!this::fLocation.isInitialized) {
            this.fLocation = location
            map.controller.setCenter(GeoPoint(location))
            map.invalidate()
        }
    }

    // Private implementation

    private fun showMenuFragment(id: MenuFragmentID) =
            with(supportFragmentManager.findFragmentByTag(id.name) ?: createFragment(id)) {
                fMenuFragment = id
                supportFragmentManager.beginTransaction()
                        .replace(R.id.menuholder, this)
                        .commit()
                this
            }

    private fun createFragment(id: MenuFragmentID): Fragment = when (id) {
        MenuFragmentID.MISSION_RESULTS_FRAGMENT -> MissionResultsFragment()
        MenuFragmentID.MISSION_STATUSES_FRAGMENT -> MissionStatusesFragment()
        MenuFragmentID.NEEDS_FRAGMENT -> NeedsFragment()
        MenuFragmentID.NEED_INSTRUCTION_FRAGMENT -> NeedInstructionFragment()
    }

    private fun requestLocationPermissions() {
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this@MainActivity, arrayOf(Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION), 42)
        }
    }

}
