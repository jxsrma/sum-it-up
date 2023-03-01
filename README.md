# Sum It Up

### This  project  employs  Natural  Language  Processing  (NLP)  techniques  to  summarize  text  data  and manipulate textual information.
The NLP algorithms used include text pre-processing, text 
representation, summarization, and data manipulation methods. The goal of the project is to condense 
large amounts of text into a more concise and manageable form while still retaining the key information 
and context. Additionally, the project also enables the manipulation of textual data to add, remove, or 
modify specific parts of the text. The results demonstrate the efficiency and effectiveness of the NLP-
based approach in summarizing text and manipulating textual data.
<br/>

# Installation Guide

## Models
In local environment, the models will be downloaded in:
```
C:\Users\User\.cache\
```

<br/>

## Install Node Modules

<br/>

Use the following command to install all the required pacakages for react app

```
npm install
```

<br/>

## Using Virtual Enviroment in Python

<br/>

 - First intall virtualenv in your main environment
```
pip install virtualenv
```

- Create Virtual Environment
```
virtualenv EnvName
```

- Use Environment
```
EnvName\Scripts\activate
```

**Note:**
You may face error while activating environment. This is due to restriction in windows. Use Following to unlock restrictions.

```
set-executionpolicy remotesigned
```

- To create a requirements.txt
```
pip freeze > requirements.txt
```

- To install a requirements.txt file in your environment
```
pip install -r requirements.txt
```

- To update all packages
```
pip freeze | %{$_.split('==')[0]} | %{pip install --upgrade $_}
```

- To close the environment
```
deactivate
```