package ch.hsr.ifs.gcs.needs

import ch.hsr.ifs.gcs.MainActivity

/**
 * Interface representing the base structure of a single task of a need to be configured.
 */
interface NeedParameter<Result> {

    /**
     * The name of the task. This is shown in the user interface.
     *
     * @since 1.0.0
     */
    val name: String

    /**
     * A short description of what the user needs to do to complete this task.
     *
     * @since 1.0.0
     */
    val description: String

    /**
     * The result of the task when completed.
     *
     * @since 1.0.0
     */
    var result: Result?

    /**
     * Provides a [String] representation of the result. This is shown in the user interface.
     *
     * @since 1.0.0
     */
    fun resultToString(): String

    /**
     * A task is set to active, if previous task are completed, and the current task is not.
     *
     * @since 1.0.0
     */
    var isActive: Boolean

    /**
     * A task is set to completed, if a result has been computed.
     *
     * @since 1.0.0
     */
    var isCompleted: Boolean

    /**
     * The setup function prepares the ui for upcoming user interaction
     * @param context The main activity
     *
     * @since 1.0.0
     */
    fun setup(context: MainActivity)

    /**
     * The cleanup function cleans up the ui after successful user interaction
     * @param context The main activity
     *
     * @since 1.0.0
     */
    fun cleanup(context: MainActivity)

}