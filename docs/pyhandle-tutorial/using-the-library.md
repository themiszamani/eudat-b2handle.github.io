---
sidebar_position: 3
---

# Start using the library

Examples on how to **use** the library:

- libraries to use 
- instantiate a client 
- manage your handle

With this example you can start using the pyhandle library in 5 minutes. 

## Libraries to import 

At the beginning of your python code just import 

```md
#!/usr/bin/env python

import sys
import b2handle
from pyhandle.clientcredentials import PIDClientCredentials
from pyhandle.handleclient import EUDATHandleClient
from pyhandle.handleexceptions import *
from requests.exceptions import SSLError

```

## Instantiate your client 

The first thing you have to do is to instantiate your client. 

But before that you have to create a json file with the necessary data to connect to the handle server.
The file uses certificates in order to authenticate with the Handle server.  

```json mycredentials.json

{
  "handle_server_url": "https://myserver.com",
  "private_key": "privkey.pem",
  "certificate_only": "certificate_only.pem",
  "prefix": "21.11111",
  "handleowner": "301:11239/ADMINUSER",
  "HTTPS_verify": "True"
}

```

Then instantiate your client 

```python 
    print "Creating credentials"
    cred = PIDClientCredentials.load_from_JSON('my_credentials.json')
    client = PyHandleClient('rest').instantiate_with_credentials(cred)
    
    print('PID prefix ' + cred.get_prefix())
    print('Server ' + cred.get_server_URL())

```


## Manage your handle

### The Example 

The example we are going to follow is to create is as follows 
 - Create a test handle with the name MYTEST-HANDLE with the URL http://www.example.com/1. 
 - Read the test handle 
 - Update the test handle by updating the URL to http://www.example.com/2
 - Delete the handle 

### The data of the test handle 

In this section we set the data for the test handle. 

```python  
    TEST_SUFFIX='MYTEST-HANDLE'
    VALUE_ORIG='http://www.example.com/1'
    VALUE_AFTER='http://www.example.com/2'
    handle = cred.get_prefix() + '/' + TEST_SUFFIX
```

Now that we have the data lets start managing the handle. 

### Create a test handle 

The creation of a handle is the first available action which is supported with  `register_handle`. [Basic interactions](https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#basic-handle-interaction)

You may either register a new Handle with a unique random name (random UUID) or with a predefine value. 

In this example we are creating a handle with the name 
    TEST_SUFFIX='MYTEST-HANDLE'


```python     
    # Create test
    print "Creating handle " + handle
    create_result = client.register_handle(handle, VALUE_ORIG)

    if create_result == handle:
        print "OK: Create handle successful."
    else:
        print "PROBLEM: Create handle returned unexpected response."
```

### Read test handle 

With the `get_value_from_handle` you may retrieve a single value from a single Handle. If several entries with this key exist, the methods returns the first one. If the handle does not exist, the method will raise an exception .[Basic interactions](https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#basic-handle-interaction)


In this example we are reading the predefined handle with key=URL. 

```python
    # Read test
    key = 'URL'
    read_value = client.get_value_from_handle(handle, key)
        
    if read_value == VALUE_ORIG:
        print "OK: Read handle successful."
    else:
        print "PROBLEM: Read handle returned unexpected response."
     
```


### Read full Handle record  

With the ` retrieve_handle_record()` you may retrieve a full handle record. If several entries with this key exist, the methods returns the first one. If the handle does not exist, the method will raise an exception .[Basic interactions](https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#basic-handle-interaction)


In this example we are reading the predefined handle with key=URL. 

```python
    # Read test
    read_value = client.retrieve_handle_record(handle) 
        
    if read_value != ΝΟΝΕ:
        print "OK: Handle exists."
    else:
        print "PROBLEM: Read handle returned unexpected response."
     
```

### Modify test handle 

The library supports the modification of a value in the handle. [Basic interactions](https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#basic-handle-interaction)


With `modify_handle_value()` a user can modify any number of values in a specific Handle record. 

In this example we are going to update the URL of the handle record with the value VALUE_AFTER

```python
    # Modify test
    key = 'URL'
    client.modify_handle_value(handle, **{key: VALUE_AFTER} )
    get_value_result = client.get_value_from_handle(handle, key)

    if get_value_result == VALUE_AFTER:
        print "OK: Modify handle successful."
    else:
        print "CRITICAL: Modify handle value returned unexpected value."
        print "Expected : " + VALUE_AFTER
        print "Returned : " + get_value_result
```

### Delete test handle 

The library supports the Deletion of the handle and its handle record with the `delete_function`. [Basic interactions](https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#basic-handle-interaction)


In this example we are going to delete the handle we previously created.

```python        
    # Delete test
    delete_result = client.delete_handle(handle)
    print "OK: Delete handle successfully."

```

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