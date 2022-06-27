---
sidebar_position: 4
---

# Searching 

Searching for a Handle. The  `search_handle()` is responsible to search for Handles with a specific key and value. Please note that searching requires access to a search servlet whose access information, if it differs from the handle server, has to be specified at client instantiation.


In the definition of the credentials file, we found the entries *reverselookup_username* and *reverselookup_password*. These are used to authenticate with a specific local Handle server to retrieve the PID when given some key-value pair in the Handle record. Assume you just know some of the metadata stored with a PID but not the full PID. How can you get to the URL field to retrieve the data?

We can fetch all data with a certain checksum. 
Make sure that your credential json file contains the keys *reverselookup_username* and *reverselookup_password*.

```py
credentials = PIDClientCredentials.load_from_JSON('<full_path>/cred_file.json')
client = EUDATHandleClient.instantiate_with_credentials(credentials)
args = dict([('CHECKSUM', md5sum)])
result = ec.search_handle(**args)
```
*result* conatins a list of all PIDs where a fiels **CHECKSUM** is defined and has the value stored in **md5sum**.
Now we can retrieve the location of the first hit in the list.

```py
url = ec.get_value_from_handle(result[0], 'URL')
print(url) 
```
**Note,** that this functionality is an EUDAT extension to the standard Handle server functionalities. You can also only query reversely on a local Handle server, not across the global Handle server.

The reverse look up function works also with wildcards:
We know that B2SAFE uses PIDs and stores the iRODS path in te field **URL**

```py
rev = dict([('URL', 'irods:*')])
result = ec.search_handle(**rev)
```
This will return a list of all PIDs stored in iRODS.

### Quick Links to Technical Documentation 

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