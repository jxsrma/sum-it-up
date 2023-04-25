from . import timerCalculator
from fastpunct import FastPunct


def punctuater(paragraph):
    try:
        start = timerCalculator.now()

        # sentences = paragraph.split(". ")

        fastpunct = FastPunct()
        result = fastpunct.punct(paragraph, correct=True)

        # text = ""
        # for i in result:
        #     text = text + " " + i
        # text = text.strip()
        # text

        end = timerCalculator.now()
        timeTaken = timerCalculator.timeTaken(end, start)
        return {
            "success": True,
            "data": result,
            "timeTaken": timeTaken,
        }

    except NameError:
        return {"success": False, "error": NameError}
