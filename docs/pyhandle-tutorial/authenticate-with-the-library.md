---
sidebar_position: 2
---

# Authentication

For creating and modifying handles* you need to authenticate at the Handle Server you’d like to write to. Authentication using pyhandle is straightforward. There are two possibilities:

 - Authenticating using username and password
 - Authenticating using client certificates

:::tip **Important Notice**

Here we assume that you know your username and password or have your private key file and your certificate file ready. If you need to set these up, please see [Authentication](https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#authentication)

:::


## Authentication using client certificates

Using client certificates, you need to provide paths to the file containing your private key and to the certificate in a JSON file. The class PIDClientCredentials provides a method load_from_JSON(). This can be read as follows:

```md
{
  "client":"rest",
  "baseuri": "https://my.handle.server",
  "private_key": "my_private_key.pem",
  "certificate_only": "my_certificate.pem"
}
```

The JSON file should look like this:

```md
{
  "baseuri": "https://my.handle.server",
  "private_key": "my_private_key.pem",
  "certificate_only": "my_certificate.pem"
}
```

## Authentication using username and password

If you have a username (something that looks like 300:foo/bar) and a password, we recommend using this constructor: instantiate_with_username_and_password():

```md
client = PyHandleClient('rest').instantiate_with_username_and_password(
  'https://my.handle.server',
  '300:foo/bar',
  'mypassword123'
)
```

Alternatively, you can store your username and password in a JSON file, instead of paths to certificate and key::

```md
    { “baseuri”: “https://my.handle.server”, “username”: “300:foo/bar”, “password”: “mypassword123” }
```

Like above, you can read the JSON like as shown above:

```md
cred = PIDClientCredentials.load_from_JSON('my_credentials.json')
client = PyHandleClient('rest').instantiate_with_credentials(cred)
```

## Credentials JSON file

The JSON file can contain more information. All items it contains are passed to the client constructor as config. Please see __init__() to find out which configuration items the client constructor understands.

## Quick Links to Technical Documentation 

 - [Instantiate Client](https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#instantiation)
 - [Authentication](https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#authentication)
  - [Authentication using client certificates](https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#authentication-using-client-certificates)
  - [Authentication using username and password](https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#authentication-using-username-and-password)
 - [Basic Handle interaction](https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#basic-handle-interaction)
 - [Full method documentation](https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#full-method-documentation)
  - [Constructors](https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#constructors)
  - [Handle record methods](https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#handle-record-methods)
  - [Helper methods](https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#helper-methods)
- [Utilities](https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#module-pyhandle.utilhandle)
- [Client credentials](https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#module-pyhandle.clientcredentials)
- [Exceptions](https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#module-pyhandle.handleexceptions)