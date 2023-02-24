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
  "paragraph":"Jash Sharma is a young and growing music producer from Indore, India born on 3rd August 2001. Jash started working in the field of music in the year 2017. Noting the fact that without having any musical background he successfully released his first music piece in the year 2020 titled \"All Together\" under the pseudonym JXSRMA. Apart from his passion for the music field, he is also a computer geek, pursuing his graduation in the field of computer science. He is still learning and working in the field of music, being a music producer he is an amazing artist. After his first release, he has released some more of his work and the work he has done is commendable."
}
```

### Response

``` json
{
  "success": true,
  "data": "he started working in the field of music in the year 2017 under the pseudonym JXSRMA . after his first release, he has released some more of his work . he is also a computer geek, pursuing his degree in computer science .",
  "timeTaken": "50 secs"
}
```



<hr>