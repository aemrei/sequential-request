# sequential-request

## Usage

You can be helpful to install it globally:

```sh
npm i -g seqreq

# then use it for your requests
seqreq myfile.yml
```

But you can use it even without installing:

```sh
npx seqreq myfile.yml
```

## YAML File

A sample file would look like this:

```yml
- VERSION: 0.0.1
  HEADERS:
    GET:
      Accept: application/json

- GET: https://jsonplaceholder.typicode.com/todos/3

- GET: https://jsonplaceholder.typicode.com/posts/1
```
