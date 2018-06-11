package ch.hsr.ifs.gcs.ui.fragments.missionresults

import android.graphics.Color
import android.support.v7.widget.RecyclerView
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import ch.hsr.ifs.gcs.MainActivity
import ch.hsr.ifs.gcs.R
import ch.hsr.ifs.gcs.input.HandheldControls


import ch.hsr.ifs.gcs.ui.fragments.missionresults.MissionResultsFragment.OnResultsFragmentChangedListener
import ch.hsr.ifs.gcs.ui.dummydata.MissionResultsDummyContent.MissionResultDummyItem
import ch.hsr.ifs.gcs.ui.fragments.FragmentType
import kotlinx.android.synthetic.main.activity_main.*

import kotlinx.android.synthetic.main.fragment_missionresults.view.*

/**
 * [RecyclerView.Adapter] that can display a [MissionResultDummyItem] and makes a call to the
 * specified [OnResultsFragmentChangedListener].
 */
class MissionResultsRecyclerViewAdapter(
        private val mValues: List<MissionResultDummyItem>,
        private val mListener: OnResultsFragmentChangedListener?,
        private val mRecyclerView: RecyclerView,
        private val mContext: MainActivity)
    : RecyclerView.Adapter<MissionResultsRecyclerViewAdapter.ViewHolder>(), HandheldControls.Listener {

    private val TAG = MissionResultsRecyclerViewAdapter::class.java.simpleName

    private val mOnClickListener: View.OnClickListener

    var activeItem: MissionResultDummyItem

    init {
        activeItem = mValues[0]
        activeItem.isSelected = true
        mOnClickListener = View.OnClickListener { v ->
            val item = v.tag as MissionResultDummyItem
            activateItem(item)
            mListener?.onResultItemChanged(item)
        }
        mContext.controls?.addListener(this)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context)
                .inflate(R.layout.fragment_missionresults, parent, false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = mValues[position]
        holder.mView.setBackgroundColor(
                if (item.isSelected) {
                    Color.argb(50, Color.red(item.color), Color.green(item.color), Color.blue(item.color))
                } else {
                    Color.TRANSPARENT
                })
        holder.mMissionName.text = "Result"
        with(holder.mView) {
            tag = item
            setOnClickListener(mOnClickListener)
        }
    }

    override fun onButton(button: HandheldControls.Button) {
        @Suppress("NON_EXHAUSTIVE_WHEN")
        when(button) {
            HandheldControls.Button.DPAD_UP -> {
                activatePreviousItem()
            }
            HandheldControls.Button.DPAD_DOWN -> {
                activateNextItem()
            }
            HandheldControls.Button.DPAD_LEFT -> {
                mContext.fragmentHandler?.performFragmentTransaction(R.id.menuholder, FragmentType.MISSION_STATUSES_FRAGMENT)
                mContext.leftButton.background = mContext.getDrawable(R.drawable.abort_mission)
                mContext.controls?.removeListener(this)
            }
            HandheldControls.Button.NEED_START -> {
                mContext.fragmentHandler?.performFragmentTransaction(R.id.menuholder, FragmentType.NEEDS_FRAGMENT)
                mContext.controls?.removeListener(this)
            }
            HandheldControls.Button.UPDATE_ABORT -> {
                Log.d(TAG, "Refresh Mission Pressed")
            }
        }
    }

    override fun getItemCount(): Int = mValues.size

    private fun activateNextItem() {
        val newIndex = mValues.indexOf(activeItem) + 1
        if(newIndex < mValues.size) {
            activateItem(mValues[newIndex])
        }
    }

    private fun activatePreviousItem() {
        val newIndex = mValues.indexOf(activeItem) - 1
        if(newIndex >= 0) {
            activateItem(mValues[newIndex])
        }
    }

    private fun activateItem(item: MissionResultDummyItem) {
        activeItem.isSelected = false
        mRecyclerView.findViewHolderForLayoutPosition(mValues.indexOf(activeItem)).itemView.setBackgroundColor(Color.TRANSPARENT)
        mListener?.onResultItemChanged(activeItem)
        activeItem = item
        activeItem.isSelected = true
        mRecyclerView.findViewHolderForLayoutPosition(mValues.indexOf(activeItem)).itemView.setBackgroundColor(Color.argb(50, Color.red(item.color), Color.green(item.color), Color.blue(item.color)))
        mListener?.onResultItemChanged(item)
    }

    inner class ViewHolder(val mView: View) : RecyclerView.ViewHolder(mView) {
        val mMissionName: TextView = mView.mission_name
        override fun toString(): String {
            return super.toString() + " '" + mMissionName.text + "'"
        }
    }
}
