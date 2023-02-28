import time


def punctuater(paragraph):
    try:
        start = time.time()

        from fastpunct import FastPunct

        # sentences = paragraph.split(". ")
        
        fastpunct = FastPunct()
        result = fastpunct.punct(paragraph,correct = True) 
        
        # text = ""
        # for i in result:
        #     text = text + " " + i
        # text = text.strip()
        # text

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
            "data": result,
            "timeTaken": timeTaken,
        }

    except NameError:
        return {"success": False, "error": NameError}