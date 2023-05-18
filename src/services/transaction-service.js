const {
  TransactionRepository,
  UserRepository,
} = require("../repository/index");
const puppeteer = require("puppeteer");
const path = require("path").resolve(__dirname, "..");
const nodemailer = require("nodemailer");
class TransactionService {
  constructor() {
    this.transactionRepository = new TransactionRepository();
    this.userRepository = new UserRepository();
  }

  async createTransaction(data) {
    try {
      const createTransacation =
        await this.transactionRepository.createTransaction(data);
      return createTransacation;
    } catch (error) {
      console.log("something went wrong in the transaction table");
      throw { error };
    }
  }
  async transactionCount(userId) {
    try {
      const transactionCount =
        await this.transactionRepository.transactionCount(userId);
      return transactionCount;
    } catch (error) {
      console.log("something went wrong in the transaction table");
      throw { error };
    }
  }
  async getTransactions(userId, page) {
    try {
      const getTransactions = await this.transactionRepository.getTransactions(
        userId,
        page
      );
      return getTransactions;
    } catch (error) {
      console.log("something went wrong in the transaction table");
      throw { error };
    }
  }

  async updateTransaction(txn_Id, data) {
    try {
      const updateTransaction =
        await this.transactionRepository.updateTransaction(txn_Id, data);
      return true;
    } catch (error) {
      console.log("something went wrong in the transaction table");
      throw { error };
    }
  }

  async updateTransactionBy_TxnId(txn_Id, data) {
    try {
      const updateTransaction =
        await this.transactionRepository.updateTransactionBy_TxnId(
          txn_Id,
          data
        );
      return true;
    } catch (error) {
      console.log("something went wrong in the transaction table");
      throw { error };
    }
  }

  async dateBasedTransaction(userId, data) {
    try {
      //extracting data from the database
      const dateBasedTransaction =
        await this.transactionRepository.dateBasedTransaction(userId, data);

      // console.log("this is the transaction------", dateBasedTransaction);
      //using puppeter
      const template = async (transactions) => {
        // console.log("template----------", transactions);
        // ****************************************************
        let tableData = "";
        await transactions.map(
          (tran, index) =>
            (tableData += ` <tr key=${index}>
            <td>
              ${new Date(tran.updatedAt).toUTCString()}
            </td>
            <td>
              ${tran.txn_type}
            </td>
            <td>${tran.flowType}</td>
            <td>
              ${tran.amount}
            </td>
            <td>
            ${tran.balance}
            </td>
          </tr>`)
        );
        //************************************************* */

        let templateString = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        </head>
        <body>
            <div class="py-2">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-12">
                    <div class="border p-3 rounded">
                        <div class="mt-3">
                          <h4 class="mb-3 text-center">Transaction Details</h1>
                          <table
                    class="table border rounded bg-light p-4 fw-medium"
                    style={{ fontSize: "0.813rem" }}
                  >
                    <thead>
                      <tr>
                        <th scope="col">DATE</th>
                        <th scope="col">DESCRIPTION</th>
                        <th scope="col">TRANSACTION TYPE</th>
                        <th scope="col">AMOUNT</th>
                        <th scope="col">BALANCE</th>
                      </tr>
                    </thead>
                    <tbody>`;
        templateString += tableData;

        templateString += ` </tbody>
                  </table>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </body>
        </html>`;
        return templateString;
      };
      const webPageToPdf = async () => {
        const browser = await puppeteer.launch();
        const webPage = await browser.newPage();
        const content = await template(dateBasedTransaction);
        await webPage.setContent(content, { waitUntil: "domcontentloaded" });

        const data = await webPage.pdf({
          printBackground: true,
          displayHeaderFooter: true,
          path: "/home/prateeksagar/LenderSystemBackend/webpage.pdf",
          format: "Tabloid",
          // format: "A4",
          landscape: false,
          margin: {
            top: "5px",
            bottom: "5px",
            left: "1px",
            right: "1px",
          },
        });
        await browser.close();
        return data;
      };
      webPageToPdf();
      return dateBasedTransaction;
    } catch (error) {
      console.log("this is date", error);
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  //function for sending trasaction receipt into gmail
  async sendTransactionToMail(userId, data) {
    try {
      const response = await this.userRepository.getUser(userId);
      await this.dateBasedTransaction(userId, data);
      // console.log("this is---------", response);
      let mailTransporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: "faircentmrborrower@gmail.com",
          pass: "amdozngheogafooc",
        },
      });

      let message = {
        from: "faircentmrborrower@gmail.com",
        to: `${response.emailId}`,
        subject: "Transaction Reciept",
        text: `Last ${data} day Transaction. Please find the attachment.
        `,
        attachments: [
          {
            filename: "webpage.pdf",
            path: "/home/prateeksagar/LenderSystemBackend/webpage.pdf",
          },
        ],
      };
      console.log("this is message", message);
      const info = await mailTransporter.sendMail(message);
      console.log(info);
      return true;
    } catch (error) {
      console.log("this is mail", error);
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = TransactionService;
