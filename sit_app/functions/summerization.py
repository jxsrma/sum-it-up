import time


def summerizer(paragraph, maxLength, minLength):
    try:
        start = time.time()

        from transformers import pipeline
        from fastpunct import FastPunct

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

        end = time.time()
        timeTaken = round(end - start)
        if timeTaken < 59:
            if timeTaken == 0 or timeTaken == 1:
                timeTaken = str(timeTaken) + " sec"
            else:
                timeTaken = str(timeTaken) + " secs"
        else:
            mints = timeTaken / 60
            if timeTaken == 1:
                timeTaken = str(mints) + " mint"
            else:
                timeTaken = str(mints) + " mints"
        return {
            "success": True,
            "data": text,
            "timeTaken": timeTaken,
        }

    except NameError:
        return {"success": False, "error": NameError}
