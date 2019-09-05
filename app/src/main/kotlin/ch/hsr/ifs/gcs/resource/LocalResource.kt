package ch.hsr.ifs.gcs.resource

import ch.hsr.ifs.gcs.resource.Resource.Status
import ch.hsr.ilt.uxv.hmi.core.driver.Platform

class LocalResource(override val id: String,
                    override val driverId: String,
                    override val payloadDriverId: String?,
                    override val capabilities: List<Capability<*>>) : Resource {

    private lateinit var fPlatform: Platform

    private var fStatus = Status.UNAVAILABLE

    override val status: Status
        get() = synchronized(fStatus) {
            fStatus
        }

    override fun has(capability: Capability<*>) = capabilities.contains(capability)

    override fun markAs(status: Status) = synchronized(fStatus) {
        fStatus = status
    }

    override var plaform: Platform
        get() = fPlatform
        set(value) {
            fPlatform = value
        }

    override val isAvailable: Boolean
        get() = synchronized(fStatus) {
            fStatus == Status.AVAILABLE && plaform.isAlive
        }
}
