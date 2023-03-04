# API Documentation

## Home

<br>

### GET

```
http://127.0.0.1:8000/
```

<br>

### Response

```json
{
  "name": "This is Homepage"
}
```

<hr>
<br>

## Summerization

<br>

### POST

```
http://127.0.0.1:8000/send
```

<br>

### Data

```json
{
  "operation": "summerize",
  "paragraph": "Paragraph for summerization"
}
```

### Request

```json
{
  "operation": "summerize",
  "maxLength": 100,
  "minLength": 50,
  "paragraph": "India, officially the Republic of India is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west; China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia."
}
```

> **_NOTE:_** If min & max length is not provided, then default max will be number of word, and min will be half the number of words

### Response

```json
{
  "success": true,
  "data": " India is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world . Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest and the Bay of Bengal on the southeast . India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia . It shares land borders with Pakistan to the west; China, Nepal,",
  "timeTaken": "50 secs"
}
```


<hr>

## Punctuation

<br>

### POST

```
http://127.0.0.1:8000/send
```

<br>

### Data

```json
{
  "operation": "punctuate",
  "paragraph": "Paragraph for summerization"
}
```

### Request

```json
{
  "operation": "punctuate",
  "paragraph": "my pin number has two 5s i ts easy to remember."
}
```

### Response

```json
{
  "success": true,
  "data": "My pin number has two 5s It's easy to remember.",
  "timeTaken": "1 sec"
}
```

<hr>

# Grammer

<br>

### POST

```
http://127.0.0.1:8000/send
```

<br>

### Data

```json
{
  "operation": "grammerize",
  "paragraph": "Paragraph for grammerization"
}
```

### Request

```json
{
  "operation": "grammerize",
  "paragraph": "Whot do someone thinks of grammar checkers? Please not that they are not perfect. Style problems get a blue marker: It is 7 P.M. in the evening. The weather was nice on Monday, 22 November 2021"
}
```

### Response

```json
{
  "success": true,
  "data": [
    {
      "ruleId": "MORFOLOGIK_RULE_EN_US",
      "message": "Possible spelling mistake found.",
      "replacements": [
        "Who",
        "What",
        "Shot",
        "Whom",
        "Hot",
        "WHO",
        "Whet",
        "Whit",
        "Whoa",
        "Whop",
        "WHT",
        "Wot",
        "W hot"
      ],
      "offsetInContext": 0,
      "context": "Whot do someone thinks of grammar checkers? ...",
      "offset": 0,
      "errorLength": 4,
      "category": "TYPOS",
      "ruleIssueType": "misspelling",
      "sentence": "Whot do someone thinks of grammar checkers?"
    },
    {
      "ruleId": "PLEASE_NOT_THAT",
      "message": "Did you mean “note”?",
      "replacements": ["note"],
      "offsetInContext": 43,
      "context": "...eone thinks of grammar checkers? Please not that they are not perfect. Style proble...",
      "offset": 51,
      "errorLength": 3,
      "category": "TYPOS",
      "ruleIssueType": "misspelling",
      "sentence": "Please not that they are not perfect."
    },
    {
      "ruleId": "PM_IN_THE_EVENING",
      "message": "This is redundant. Consider using “P.M.”",
      "replacements": ["P.M."],
      "offsetInContext": 43,
      "context": "...yle problems get a blue marker: It is 7 P.M. in the evening. The weather was nice on Monday, 22 Nov...",
      "offset": 124,
      "errorLength": 19,
      "category": "REDUNDANCY",
      "ruleIssueType": "style",
      "sentence": "Style problems get a blue marker: It is 7 P.M. in the evening."
    }
  ],
  "timeTaken": "9 secs"
}
```
