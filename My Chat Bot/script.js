function talk() {
    var know = {
        "hey": "hii",
        "hi": "hey",
        "hii": "hello",
        "Hi": "Hello",
        "How Are You?": "Great !",
        "how are you?": "Great !",
        "Bye": "Have A Nice Day !",
        "bye": "Have A Nice Day !",
        "by": "Have A Nice Day !",
        "byy": "Have A Nice Day !",
        "Hello": "Hi , Whats Up",
        "My Name Is Ayush Bhagat": "Welcome Genius Programmer",
        "My Quote": "If You Are Not Playing For Win Then Better Do Not Play"
    };
    const user = document.getElementById('userBox').value;
    // document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user]
    } else {
        document.getElementById('chatLog').innerHTML = "I do not understand .";
    }
}