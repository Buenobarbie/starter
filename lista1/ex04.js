function fibonacci(num){
    if (num == 1 || num == 2)
        return num;   
    else{
        return (fibonacci(num -1) + fibonacci(num - 2));
    }

}