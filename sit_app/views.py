from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
import json

from .functions import summerization, punctuation, grammerization

# Views.


@api_view(["GET"])
def getData(request):
    home = {"name": "This is Homepage"}
    return Response(home)


@api_view(["POST"])
def optimize(request):
    data = json.loads(request.body)
    print()
    print(data)
    print()
    maxLength = data.get("maxLength")
    minLength = data.get("minLength")
    result = {}
    # Summerization
    if data["operation"] == "summarize":
        paragraph = data["paragraph"]
        wordLength = len(paragraph.split(" "))
        if "maxLength" not in data:
            maxLength = wordLength
        if "minLength" not in data:
            minLength = wordLength // 2
        minLength = int(wordLength * (minLength / 100))
        result = summerization.summerizer(
            paragraph=paragraph, maxLength=maxLength, minLength=minLength
        )
    if data["operation"] == "punctuate":
        paragraph = data["paragraph"]
        result = punctuation.punctuater(paragraph)

    if data["operation"] == "grammarize":
        paragraph = data["paragraph"]
        result = grammerization.grammerizer(paragraph)
    print()
    print(result)
    print()
    return Response(result)


# Functions
