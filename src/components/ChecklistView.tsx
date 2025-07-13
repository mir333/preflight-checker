import {useState} from "react";
import type {Checklist} from "../types.d";

interface ChecklistViewProps {
  checklist: Checklist;
  onBack?: () => void;
}

export default function ChecklistView({checklist}: ChecklistViewProps) {
  const [current, setCurrent] = useState(0);

  return (
    <div
      className="flex flex-col justify-center max-w-xl w-full mx-auto bg-white rounded-none sm:rounded-2xl shadow-none sm:shadow-lg p-4 sm:p-8 mt-0 sm:mt-10 relative min-h-[90vh] flex-1">
      <h2 className="text-center text-lg sm:text-2xl font-bold mb-10 sm:mb-8 px-2 break-words">{checklist.title}</h2>
      <div className="flex flex-col items-center justify-center relative flex-1 min-h-[80px] sm:min-h-[120px]">
        {current >= checklist.steps.length ? (
          <span className="text-green-700 text-xl sm:text-2xl font-bold mt-6">Checklist complete!</span>
        ) : <>
          {/* Previous Step (partially visible, faded card, now clickable) */}
        {current > 0 && (
          <div className="absolute top-0 left-0 right-0 flex justify-center z-0">
            <button
              className="opacity-30 border-2 border-black rounded-2xl bg-white px-2 py-2 w-11/12 sm:w-3/4 text-center text-sm sm:text-base -translate-y-8 sm:-translate-y-12 truncate shadow-md pointer-events-auto select-none transition-opacity hover:opacity-60"
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
            className={`h-[70vh] w-full max-w-full sm:max-w-2xl flex items-center justify-center text-lg sm:text-2xl font-semibold my-6 sm:my-8 text-center px-2 break-words rounded-2xl border-2 border-black shadow-xl bg-white z-10`}
            onClick={() => setCurrent(current + 1)}
          >
            {checklist.steps[current].text}
          </button>

        {/* Next Step (partially visible, faded card, now clickable) */}
        {current < checklist.steps.length - 1 && (
          <div className="absolute bottom-0 left-0 right-0 flex justify-center z-0">
            <button
              className="opacity-30 border-2 border-black rounded-2xl bg-white px-2 py-2 w-11/12 sm:w-3/4 text-center text-sm sm:text-base translate-y-8 sm:translate-y-12 truncate shadow-md pointer-events-auto select-none transition-opacity hover:opacity-60"
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
