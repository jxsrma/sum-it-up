from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
import json
import time

# Create your views here.


@api_view(["GET"])
def getData(request):
    person = {"name": "Dennis", "age": "28"}
    return Response(person)


@api_view(["POST"])
def summerize(request):
    data = json.loads(request.body)
    paragraph = data["paragraph"]
    try:
        start = time.time()

        from transformers import pipeline

        summarizer = pipeline("summarization")
        summary = summarizer(paragraph, max_length=100, min_length=50, do_sample=False)
        summary = summary[0]['summary_text']
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
        res = {
            "success": True,
            "data": summary,
            "timeTaken": timeTaken,
        }
        return Response(res)
    except NameError:
        res = {"success": False, "error": NameError}
        return Response(res)
