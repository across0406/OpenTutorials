# OpenTutorials
For OpenTutorials study footsteps

## - Settings
OS: Ubuntu 20.04 LTS
IDE: Visual Studio Code

## 1. HTML
> If you check the text of study footsteps, go https://yah.ac/yahac3.
### 1-1. Tags
> <pre><code><strong></code></pre>: Amphasize text   
> <pre><code><u></code></pre>: underline   
> <pre><code><h^[1-6]>:</code></pre> Define the heads of HTML documents. 1 is a most important head, and 6 is less important than other head tags.   
> <pre><code><br></code></pre>: new line   
> <pre><code><p></code></pre>: paragraph   
> * Without CSS, <pre><code><br></code></pre> brings more degree of freedom than <pre><code><p>. But applying CSS, <pre><code><p></code></pre> is available to set space size.   
> <pre><code><img></code></pre>: image   
>> * Attributes   
>>> * src: image source. The type is able to be URL or path.   
>>> * width: width ratio   
> <pre><code><li></code></pre>: list element   
> <pre><code><ul></code></pre>: unordered list   
> <pre><code><ol></code></pre>: ordered list   
> <pre><code><a></code></pre>: anchor. It is responsible for link function.   
>> * Attributes   
>>> * href: Hypertext Reference. The type is URL or path.   
>>> * target: The value _blank means the linked contents is opened in new window.   
>>> * title: anchor tooltip   


### 1-2. Other
> https://www.advancedwebranking.com/html/: Statistics usage of HTML tags.
> When write HTML codes, it needs to include information.
> As increase of HTML files, we can complete simple sites.
> Client: The PC or terminal that send 'Request' to a server first.
> Server: The PC or terminal that receive 'Request' from a client. And then, it send 'Response' to the client.
> If you have to manage your web server yourself, you should do this way.
>> 1. Prepare your server computer.
>> 2. Setup the server with programming or software.
>> 3. Setup a network of the server.
> But if you don't have to manage it yourself, you can use some web hosting service. There are some web hosting service, like pages of github.
> There are web server product to the following:
>> * Apache
>> * IIS
>> * Nginx
>> * etc.
> Use Apache in this content.
> As using Ubuntu 20.04 LTS, just input command 'sudo apt install apache2'.
> You can check your server computer IP as input command 'hostname -I'.
> When apache2 is installed, the default path is '/var/www/html/'.