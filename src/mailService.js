module.exports = function(app) {
  app.service('mailService', [

    function() {
      var Mail = function(id, recipients, senders, body, subject) {
        this.id = id;
        this.recipients = recipients;
        this.senders = senders;
        this.body = body;
        this.subject = subject;
      }

      this.get = function(id) {
        return this.getMail().filter(function(message) {
          return message.id === id;
        })[0];
      }

      this.getMail = function() {
        return [
          new Mail(1, "john@doe.com",
            "dexter@miguel.com",
            "this is a test",
            "this is a test"),
          new Mail(2, "mary@doe.com",
            "daniel@miguel.com",
            "this is another test",
            "this is a test")
        ]
      }
    }
  ]);
}