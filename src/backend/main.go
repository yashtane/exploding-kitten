package main

import (
    "fmt"
    "net/http"
)

func main() {
    // Define a handler function for the root route
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello, World!") // Respond with "Hello, World!" to all requests to the root route
    })

    // Start the web server on port 8080
    fmt.Println("Server is running on port 8080")
    err := http.ListenAndServe(":8080", nil)
    if err != nil {
        fmt.Println("Error starting server:", err)
    }
}
