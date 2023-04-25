from . import timerCalculator
import language_tool_python


def grammerizer(paragraph):
    try:
        start = timerCalculator.now()

        my_tool = language_tool_python.LanguageTool("en-US")
        my_matches = my_tool.check(paragraph)

        checklist = []

        for i in my_matches:
            checkDict = {
                "ruleId": i.ruleId,
                "message": i.message,
                "replacements": i.replacements,
                "offsetInContext": i.offsetInContext,
                "context": i.context,
                "offset": i.offset,
                "errorLength": i.errorLength,
                "category": i.category,
                "ruleIssueType": i.ruleIssueType,
                "sentence": i.sentence,
            }
            checklist.append(checkDict)

        end = timerCalculator.now()
        timeTaken = timerCalculator.timeTaken(end, start)
        return {
            "success": True,
            "data": checklist,
            "timeTaken": timeTaken,
        }
    except NameError:
        return {"success": False, "error": NameError}
    except Exception as e:
        print(e)
        return {"success": False, "error": e}
