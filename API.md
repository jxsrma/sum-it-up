# API Documentation

## Home

<br>

### GET

```
http://127.0.0.1:8000/
```
<br>

### Response
``` json
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

``` json
{
  "operation":"summerize",
  "paragraph":"Paragraph for summerization"
}
```

### Request

``` json
{
  "operation":"summerize",
  "paragraph":"India, officially the Republic of India is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west; China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia."
}
```

### Response

``` json
{
  "success": true,
  "data": " India is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world . Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest and the Bay of Bengal on the southeast . India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia . It shares land borders with Pakistan to the west; China, Nepal,",
  "timeTaken": "50 secs"
}
```



<hr>