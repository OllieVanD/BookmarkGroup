CREATE DATABASE bookmarks_manager;
\c bookmarks_manager
CREATE TABLE bookmarks( id SERIAL PRIMARY KEY, url VARCHAR(60));
INSERT INTO bookmarks(url) VALUES ( 'vscode.com');
