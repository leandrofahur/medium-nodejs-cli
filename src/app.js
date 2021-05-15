const yargs = require("yargs");

yargs.usage("\nUsage: $0 [cmd] <args>").alias("h", "help");

yargs
  .command(
    "add",
    "Add a contact",
    {
      name: {
        type: "string",
        demandOption: true,
        describe: "Contact name",
      },
      phone: {
        type: "string",
        describe: "Contact phone",
      },
    },
    function (argv) {
      console.log("add");
    }
  )
  .example("node $0 add --name='John Doe' --phone='0123456789'");

yargs
  .command(
    "search",
    "Search a contact",
    {
      name: {
        describe: "Contact name",
        type: "string",
        demandOption: true,
      },
    },
    function () {
      console.log("search");
    }
  )
  .example("node $0 search --name='John Doe'");

yargs
  .command(
    "remove",
    "Remove a contact",
    {
      name: {
        describe: "Contact name",
        type: "string",
        demandOption: true,
      },
    },
    function (argv) {
      console.log("remove");
    }
  )
  .example("node $0 remove --name='John Doe'");

yargs
  .command("show", "Display all contacts", function () {
    console.log("show");
  })
  .example("node $0 show");

console.log(yargs.argv);
