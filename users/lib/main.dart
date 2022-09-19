import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:async';
import 'dart:convert';

void main () {
  runApp(
    MaterialApp(
      home: HomePage()
    ),
  );
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  dynamic data = "";
  dynamic userData = [];
  getUsers() async {
    http.Response response = await http.get(Uri.parse('http://127.0.0.1:4000/eso'));
    debugPrint(response.body);
    data = json.decode(response.body);
    setState(() {
      userData = data['message'];
    });
  }

  @override
  void initState() {
    super.initState();
    getUsers();
  }
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Principal Page'),
        backgroundColor: Color.fromARGB(255, 21, 224, 207),
          ),
          body: ListView.builder(
            itemCount: userData == null ? 0 : data.length,
            itemBuilder: (BuildContext context, int index) {
              return Card(
                child: Row(
                  children: <Widget>[
                    Text(userData)
                  ],
                )
              );
            },
          ),
        );
  }
}