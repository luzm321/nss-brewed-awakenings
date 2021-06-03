import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const orders = getOrders();

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    const employeeOrders = orders.filter(
                        (order) => {
                            if (order.employeeId === employee.id) {
                                return true;
                            };
                        }
                    );
                    
                    window.alert(`${employee.name} sold ${employeeOrders.length} products`)
                    // window.alert(`${employee.name} sold ${Math.round(Math.random() * 10) + 1} products`) // returns a random integer from 1 to 10
                };   
            };
        };
    }
);

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html;
}

