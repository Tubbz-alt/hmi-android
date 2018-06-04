package ch.hsr.ifs.gcs.ui.fragments.needinstructions

import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import ch.hsr.ifs.gcs.MainActivity
import ch.hsr.ifs.gcs.R
import ch.hsr.ifs.gcs.input.HandheldControls
import ch.hsr.ifs.gcs.needs.parameters.NeedParameter
import ch.hsr.ifs.gcs.ui.fragments.FragmentType
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.fragment_need_instruction.view.*

class NeedInstructionRecyclerViewAdapter(
        private val mValues: List<NeedParameter<*>>,
        private val mContext: MainActivity)
    : RecyclerView.Adapter<NeedInstructionRecyclerViewAdapter.ViewHolder>(), HandheldControls.Listener {

    private val TAG = NeedInstructionRecyclerViewAdapter::class.java.simpleName

    init {
        mContext.controls?.addListener(this)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.fragment_need_instruction, parent, false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = mValues[position]
        val context = holder.mView.context.applicationContext
        if(item.isActive && !item.isCompleted) {
            holder.mCheckBoxView.background = context.getDrawable(R.drawable.checkbox_active_incomplete)
        } else if(item.isCompleted) {
            holder.mCheckBoxView.background = context.getDrawable(R.drawable.checkbox_active_complete)
            holder.mResultView.text = item.resultToString()
        } else {
            holder.mCheckBoxView.background =  context.getDrawable(R.drawable.checkbox_inactive)
        }
        holder.mInstructionView.text = item.name
    }

    override fun onButton(button: HandheldControls.Button) {
        when(button) {
            HandheldControls.Button.UPDATE_ABORT -> {
                mContext.fragmentHandler?.performFragmentTransaction(R.id.menuholder, FragmentType.NEEDS_FRAGMENT)
                mContext.leftButton.background = mContext.getDrawable(R.drawable.cancel_action)
                mContext.controls?.removeListener(this)
            }
        }
    }

    override fun getItemCount(): Int = mValues.size

    inner class ViewHolder(val mView: View) : RecyclerView.ViewHolder(mView) {
        val mInstructionView: TextView = mView.instruction
        val mCheckBoxView: View = mView.checkBoxView
        val mResultView: TextView = mView.result
        override fun toString(): String {
            return super.toString() + " '" + mInstructionView.text + "'"
        }
    }

}