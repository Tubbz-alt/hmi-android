package ch.hsr.ifs.gcs.resources

/**
 * A resource is an abstract representation of a platform.
 *
 * Each resource provides a unique identification, a list of capabilities, and information about
 * the status of the resource.
 *
 * @since 1.0.0
 * @author IFS Institute for Software
 */
interface Resource {

    /**
     * A [resource][Resource] can be in one of several states, allowing for further filtering
     *
     * @since 1.0.0
     */
    enum class Status {
        /**
         * The resource is not available, e.g. its platform is not connected
         */
        UNAVAILABLE,

        /**
         * The resource is running and available for use
         */
        AVAILABLE,

        /**
         * The resource has been acquired for a task
         */
        ACQUIRED,

        /**
         * The resource is running but currently busy performing a mission
         */
        BUSY,

        /**
         * The resource has failed and is not available for use
         */
        FAILED
    }

    /**
     * The status of the resource
     *
     * @since 1.0.0
     */
    val status: Status

    /**
     * The unique identification of a resource
     *
     * @since 1.0.0
     */
    val id: String

    /**
     * The list of capabilities of this resource
     *
     * @since 1.0.0
     */
    val capabilities: List<Capability<*>>

    /**
     * Check if the resource has the given capability
     *
     * @param capability The desired capability
     * @return `true` iff. the resource has the desired capability, `false` otherwise
     *
     * @since 1.0.0
     */
    fun has(capability: Capability<*>): Boolean
}