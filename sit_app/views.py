from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
import json

from .functions import summerization, punctuation

# Views.


@api_view(["GET"])
def getData(request):
    home = {"name": "This is Homepage"}
    return Response(home)


@api_view(["POST"])
def optimize(request):
    data = json.loads(request.body)

    # Summerization
    if data["operation"] == "summerize":
        paragraph = data["paragraph"]
        maxLength = data["maxLength"]
        minLength = data["minLength"]
        result = summerization.summerizer(
            paragraph=paragraph, maxLength=maxLength, minLength=minLength
        )
    if data["operation"] == "punctuate":
        paragraph = data["paragraph"]
        result = punctuation.punctuater(paragraph)
    return Response(result)

# Functions
