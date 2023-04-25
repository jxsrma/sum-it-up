from . import timerCalculator
from transformers import pipeline
from fastpunct import FastPunct


def summerizer(paragraph, maxLength, minLength):
    try:
        start = timerCalculator.now()

        summarizer = pipeline("summarization")
        summary = summarizer(
            paragraph,
            max_length=int(maxLength),
            min_length=int(minLength),
            do_sample=False,
        )
        summary = summary[0]["summary_text"]

        sentence = summary.split(". ")
        fastpunct = FastPunct()
        result = fastpunct.punct(sentence, correct=True)

        text = ""
        for i in result:
            text = text + " " + i
        text = text.strip()
        text

        end = timerCalculator.now()
        timeTaken = timerCalculator.timeTaken(end, start)
        return {
            "success": True,
            "data": text,
            "timeTaken": timeTaken,
        }

    except NameError:
        return {"success": False, "error": NameError}
