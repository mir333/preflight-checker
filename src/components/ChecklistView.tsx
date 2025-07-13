import {useState} from "react";
import { useIntl } from 'react-intl';
import type {Checklist} from "../types.d";

interface ChecklistViewProps {
  checklist: Checklist;
}

export default function ChecklistView({checklist}: ChecklistViewProps) {
  const [current, setCurrent] = useState(0);
  const intl = useIntl();

  return (
    <div
      className="flex flex-col justify-center max-w-xl w-full mx-auto bg-white rounded-none  shadow-none  p-4  mt-0  relative min-h-[90vh] flex-1">
      <h2 className="text-center text-lg  font-bold mb-10  px-2 break-words">{checklist.title}</h2>
      <div className="flex flex-col items-center justify-center relative flex-1 min-h-[80px] ">
        {current >= checklist.steps.length ? (
          <span className="text-green-700 text-xl  font-bold mt-6">
            {intl.formatMessage({ id: "checklistComplete", defaultMessage: "Checklist complete!" })}
          </span>
        ) : <>
          {/* Previous Step (partially visible, faded card, now clickable) */}
        {current > 0 && (
          <div className="absolute top-0 left-0 right-0 flex justify-center z-0">
            <button
              className="opacity-30 border-2 border-black rounded-2xl bg-white px-2 py-2 w-11/12  text-center text-sm  -translate-y-8  truncate shadow-md pointer-events-auto select-none transition-opacity hover:opacity-60"
              onClick={() => setCurrent(current - 1)}
              tabIndex={0}
              aria-label="Previous step"
            >
              {checklist.steps[current - 1].text}
            </button>
          </div>
        )}
        {/* Current Step - prominent card, 70% of screen height */}

          <button
            className={`h-[70vh] w-full max-w-full  flex items-center justify-center text-lg  font-semibold my-6  text-center px-2 break-words rounded-2xl border-2 border-black shadow-xl bg-white z-10`}
            onClick={() => setCurrent(current + 1)}
          >
            {checklist.steps[current].text}
          </button>

        {/* Next Step (partially visible, faded card, now clickable) */}
        {current < checklist.steps.length - 1 && (
          <div className="absolute bottom-0 left-0 right-0 flex justify-center z-0">
            <button
              className="opacity-30 border-2 border-black rounded-2xl bg-white px-2 py-2 w-11/12  text-center text-sm  translate-y-8  truncate shadow-md pointer-events-auto select-none transition-opacity hover:opacity-60"
              onClick={() => setCurrent(current + 1)}
              tabIndex={0}
              aria-label="Next step"
            >
              {checklist.steps[current + 1].text}
            </button>
          </div>
        )}
        </>}
      </div>
    </div>
  );
}
