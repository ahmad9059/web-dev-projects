#include <sys/types.h>
#include <sys/wait.h>  
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>  

int main() {
  
    pid_t pid;

    pid = fork();

    if (pid < 0) { 
        fprintf(stderr, "Fork Failed\n");
        return EXIT_FAILURE;
    } 
    else if (pid == 0) {  
        execlp("/bin/ls", "ls", NULL);
        perror("execlp failed");  
        exit(EXIT_FAILURE);
    } 
    else {  
        wait(NULL);
        printf("Child Complete\n");
    }

    return EXIT_SUCCESS;
}

