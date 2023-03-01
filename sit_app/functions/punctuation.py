from . import timerCalculator

def punctuater(paragraph):
    try:
        start = timerCalculator.now()

        from fastpunct import FastPunct

        # sentences = paragraph.split(". ")
        
        fastpunct = FastPunct()
        result = fastpunct.punct(paragraph,correct = True) 
        
        # text = ""
        # for i in result:
        #     text = text + " " + i
        # text = text.strip()
        # text

        end = timerCalculator.now()
        timeTaken = timerCalculator.timeTaken(end,start)
        return {
            "success": True,
            "data": result,
            "timeTaken": timeTaken,
        }

    except NameError:
        return {"success": False, "error": NameError}