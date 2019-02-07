/*
	The config options defined in the manifest.json file are displayed in the Botfather GUI.
	Values configured by the user via the GUI can be accessed using the Config.getValue method.
	Config.getValue takes the "id" of an config option as parameter and returns the value configured by the user.
	When the user has not configured a config option, the "default" value is returned if such is provided in the manifest file.
	Config.getValue automatically converts and returns script compatible types.

	There are 6 different config option "types". They are mapped to script types the way listed below:
	+----------------------+-------------+-----------------+
	| Config Option "type" | Script type | Examples        |
	+----------------------+-------------+-----------------+
	| "boolean"            | boolean     | true, false     |
	+----------------------+-------------+-----------------+
	| "integer"            | number      | 71, -4, 902     |
	+----------------------+-------------+-----------------+
	| "number"             | number      | 0.9, 87.3, -9.1 |
	+----------------------+-------------+-----------------+
	| "string"             | string      | "Hello World"   |
	+----------------------+-------------+-----------------+
	| "password"           | string      | "SuperSecret"   |
	+----------------------+-------------+-----------------+
	| "choice"             | string      | "Best Choice"   |
	+----------------------+-------------+-----------------+
*/

Helper.log("Your bot configuration:");
Helper.log("Name:", Config.getValue("your_name"));
Helper.log("Age:", Config.getValue("age"));
Helper.log("Search:", Config.getValue("search_engine_url"));
Helper.log("Look me up:", Config.getValue("look_me_up"));
Helper.log("Secret:", Config.getValue("secret"));
Helper.log("Math:", Config.getValue("math_result"));
Helper.log("Read this bots source code to see how to define and use config values.");

if (Config.getValue("look_me_up")) {
	var search_query = Config.getValue("search_engine_url") + "?q=" + encodeURI(Config.getValue("your_name"));
	Browser.loadUrl(search_query);
	Helper.log("By the way: I looked you up on the internet. Open the browser to see what I've found.");
}

if (Config.getValue("math_result") == 9 / 2) {
	Helper.log("And your math was right, congratulations!");
}