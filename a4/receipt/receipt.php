<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Receipt</title>
    <link id="receipt_stylecss" type="text/css" rel="stylesheet" href="./receipt/receipt-style.css" />
  </head>
<body>
    <page size="A4">
        <div class="header-container">
            <div class="header">
                <img src="./images/logo1.png"/>
                <text>Make today amazing</text>
            </div>
        </div>
        <div class="top-border-container">
            <div class="yellow-border"></div>
            <text>INVOICE</text>
        </div>
        <div class="row">
            <div class="column col1">
                <h4>Invoice to:</h4>
                <text style="font-weight: 900;">BumBeoHAHA<br></text>
                <span style="color: grey">bum@gmail.com<br>0936225495</span>
            </div>
            <div class="column col2">
                <h6>Invoice # <span style="margin-left: 55px; color: grey">52148</span></h6>
                <h6>Date <span style="margin-left: 50px; color: grey">22/05/2020</span></h6>
            </div>
        </div>
        <div class="table-wrap">
            <table>
                <tr class="table-title">
                    <th>Movie</th>
                    <th>Time</th>
                    <th>Seat</th>
                    <th>Qty</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Mon 12pm</td>
                    <td>STA</td>
                    <td>1</td>
                    <td>$50</td>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Mon 12pm</td>
                    <td>STA</td>
                    <td>1</td>
                    <td>$50</td>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Mon 12pm</td>
                    <td>STA</td>
                    <td>1</td>
                    <td>$50</td>
                </tr>
            </table>
        </div>
        <div class="row">
            <div class="column col1">
                <h6>Thank you for choosing us.</h6>
                <text style="font-weight: 900;">Co.Ltd.Cinemax<br></text>
                <span style="color: grey">ABN: 00 123 456 789</span>
            </div>
            <div class="column col2">
                <ul class="ul1">
                    <li>Sub Total</li>
                    <li>GST</li>
                    <li class="total-yellow">Total</li>
                </ul>
                <ul class="ul2">
                    <li>$100</li>
                    <li>$10</li>
                    <li>$100</li>
                </ul>
            </div>
            <div class="total-yellow-border"></div>
        </div>
        <div class="footer-yellow-border"></div>
        <div class="cus-footer">
            <text>+8401234567   |</text>
            <text>Cinemax Building, 03 Wall Street, Ward 2, HCM City    |</text>
            <text>cinemax.com</text>
        </div>
    </page>
</body>
</html>