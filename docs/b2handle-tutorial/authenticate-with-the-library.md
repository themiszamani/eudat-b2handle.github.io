---
sidebar_position: 2
---

# Authentication

For creating and modifying handles* you need to authenticate at the Handle Server you’d like to write to. Authentication using b2handle is straightforward. There are two possibilities:

 - Authenticating using username and password
 - Authenticating using client certificates

:::tip **Important Notice**

Here we assume that you know your username and password or have your private key file and your certificate file ready. If you need to set these up, please see [Authenticate at a Handle Server](https://eudat-b2handle.github.io/B2HANDLE/authentication.html)

:::


## Authentication using client certificates

Using client certificates, you need to provide paths to the file containing your private key and to the certificate in a JSON file. The class PIDClientCredentials provides a method load_from_JSON(). This can be read as follows:

```md
cred = PIDClientCredentials.load_from_JSON('my_credentials.json')
client = EUDATHandleClient.instantiate_with_credentials(cred)
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
client = EUDATHandleClient.instantiate_with_username_and_password(
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
client = EUDATHandleClient.instantiate_with_credentials(cred)
```

## Credentials JSON file

The JSON file can contain more information. All items it contains are passed to the client constructor as config. Please see __init__() to find out which configuration items the client constructor understands.

## Quick Links to Technical Documentation 

 - [Instantiate Client](http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#instantiation)
 - [Authentication](http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#authentication)
  - [Authentication using client certificates](http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#authentication-using-client-certificates)
  - [Authentication using username and password](http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#authentication-using-username-and-password)
 - [Basic Handle interaction](http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#basic-handle-interaction)
 - [Managing multiple URLs with 10320/loc](http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#managing-multiple-urls-with-10320-loc)
 - [Full method documentation](http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#full-method-documentation)
  - [Constructors](http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#constructors)
  - [Handle record methods](http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#handle-record-methods)
  - [Methods for managing 10320/loc entries](http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#methods-for-managing-10320-loc-entries)
  - [Helper methods](http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#helper-methods)
- [Utilities](http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#module-b2handle.utilhandle)
- [Client credentials](http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#module-b2handle.clientcredentials)
- [Exceptions](http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#module-b2handle.handleexceptions)