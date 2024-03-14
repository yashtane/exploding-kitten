

package main

import (
    "database/sql"
    "fmt"
    _ "github.com/lib/pq"
)

func main() {
    // Define the connection string
    connectionString := "host=localhost port=5432 user=myuser password=mypassword dbname=mydb sslmode=disable"

    // Connect to the PostgreSQL database
    db, err := sql.Open("postgres", connectionString)
    if err != nil {
        panic(err)
    }
    defer db.Close()

    // Check if the connection is successful
    err = db.Ping()
    if err != nil {
        panic(err)
    }
    fmt.Println("Connected to the database!")

    // Query the database
    rows, err := db.Query("SELECT id, name FROM users")
    if err != nil {
        panic(err)
    }
    defer rows.Close()

    // Process query results
    for rows.Next() {
        var id int
        var name string
        if err := rows.Scan(&id, &name); err != nil {
            panic(err)
        }
        fmt.Printf("ID: %d, Name: %s\n", id, name)
    }

    // Check for any errors during rows iteration
    if err := rows.Err(); err != nil {
        panic(err)
    }
}
