
    let userScore = 0;
    let compScore = 0;
    const choices = document.querySelectorAll(".choice");
    const msg = document.querySelector("#msg");
    const userScorepara = document.querySelector("#score-user");
    const compScorepara = document.querySelector("#comp-score");
    const msgContainer=document.querySelector(".msg-container");
    //FinalWinner
    const FinalWinner=()=>{
     if(userScore === 10){
        msg.innerHTML = `Your${userChoice}Win`;
     }else{
        msg.innerHTML = `Your${comChoice}Win`;
     }
    }
    // Winner
    const showWinner = (userWin,userChoice,compC) => {
        if (userWin) {
            userScore++;
            userScorepara.innerText = userScore;
            msg.innerHTML = `You win!Your ${userChoice} beat to ${compC}`;
            msg.style.backgroundColor = "green";
        } else {
            compScore++;
            compScorepara.innerText = compScore;
            msg.innerHTML = `You lost.${compC} beat to ${userChoice}`;
            msg.style.backgroundColor = "red";
        }
    };

    // Computer Choice
    const genComp = (compC) => {
        const option = ["rock", "paper", "scissor"];
        const ranIndex = Math.floor(Math.random() * 3);
        option.innerHTML = compC.slice(0);
        option.style.backgroundColor = "green";
        return option[ranIndex];
    };

    // User Choice
    const playGame = (userChoice) => {
        msgContainer.classList.remove('hide');
        console.log("userChoice=", userChoice);
        const compC = genComp();
        console.log("comp Choice=", compC);
        if (userChoice === compC) {
            msg.innerText = "Game was Draw! Play again";
            msg.style.backgroundColor = "#081b31";
            msg.classList.remove('hide');
        } else {
            let userWin = true;
            if (userChoice === "rock") {
                userWin = compC === "paper" ? false : true;
            } else if (userChoice === "paper") {
                userWin = compC === "scissor" ? false : true;
            } else {
                userWin = compC === "rock" ? false : true;
            }

            showWinner(userWin,userChoice,compC);

        }
    };
    const originalHTML = ["<img src=./images/rock.png>","<img src=./images/ppr.png>","<img src=./images/scc.png>"];
    choices.forEach((choice) => {
        console.log(originalHTML.push(choice.innerHTML));
    });
    choices.forEach((choice,index) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            choice.innerHTML = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
            choice.style.backgroundColor = "green";
            playGame(userChoice);
            setTimeout(() => {
            choice.innerHTML = originalHTML[index];
                choice.style.backgroundColor = ""; // Reset background color if needed
            }, 1000);
        });
    });
    

