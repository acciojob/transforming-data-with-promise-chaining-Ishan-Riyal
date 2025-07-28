//your JS code here. If required.
 document.getElementById("btn").addEventListener("click", () => {
      const inputValue = parseFloat(document.getElementById("ip").value);
      const outputDiv = document.getElementById("output");

      if (isNaN(inputValue)) {
        outputDiv.textContent = "Please enter a valid number.";
        return;
      }

      // Step 1: Initial Promise (after 2 seconds)
      new Promise((resolve) => {
        setTimeout(() => {
          outputDiv.textContent = `Result: ${inputValue}`;
          resolve(inputValue);
        }, 2000);
      })
      // Step 2: Multiply by 2 (after 2 seconds)
      .then((num) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const result = num * 2;
            outputDiv.textContent = `Result: ${result}`;
            resolve(result);
          }, 2000);
        });
      })
      // Step 3: Subtract 3 (after 1 second)
      .then((num) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const result = num - 3;
            outputDiv.textContent = `Result: ${result}`;
            resolve(result);
          }, 1000);
        });
      })
      // Step 4: Divide by 2 (after 1 second)
      .then((num) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const result = num / 2;
            outputDiv.textContent = `Result: ${result}`;
            resolve(result);
          }, 1000);
        });
      })
      // Step 5: Add 10 (after 1 second)
      .then((num) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const result = num + 10;
            outputDiv.textContent = `Final Result: ${result}`;
            resolve(result);
          }, 1000);
        });
      });
    });