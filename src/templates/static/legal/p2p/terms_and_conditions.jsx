import React from 'react';

const TermsAndConditions = () => (
    <div id='p2p-tnc'>
        <h1 data-anchor='p2p-tnc'>{it.L('P2P Cashier terms of use')}</h1>
        <p><i>{it.L('Version 1.')}</i></p>
        <p><i>{it.L('Last updated 2020/05/20.')}</i></p>

        <h2 data-anchor='p2p-cashier'>{it.L('P2P Cashier services')}</h2>
        <p>{it.L('It is the responsibility of each client to read and understand this legal notice and the terms and conditions pursuant to which an acquisition of financial contracts via this site is governed.')}</p>

        <ol>
            <li>{it.L('Ads')}
                <ol>
                    <li>{it.L('You are only authorised to post ads if we have pre-approved you according to our [Know Your Customer policy].')}</li>
                    <li>{it.L('You can post one or more ads on our platform when you wish to offer to buy or sell Deriv credits. We have the right to restrict the number of your ads or remove your ads for security reasons and reasons of suspected misconduct or fraudulent activity.')}</li>
                    <li>{it.L('When you post ads, it is recommended that you stay active and available to react to orders that are placed in response to your ads. If a dispute is initiated (see [Complaints and disputes] for more information) in a transaction against an advertiser who has not been active and available for the duration of the transaction, the advertiser may be considered unresponsive and the dispute may be resolved against the advertiser.')}</li>
                    <li>{it.L('Information and payment details that you provide at any stage of transactions, including but not limited to the ads and orders, must at all times be correct and up to date. Disputes may be resolved against you if you include out-of-date payment details. Failure to provide accurate, uptodate payment details for transactions initiated from your ads is considered a violation of this agreement.')}</li>
                    <li>{it.L('The fixed rate that the advertiser enters in the ad details will determine any and all amounts that the advertiser will receive. After initiating a transaction, the price is locked and cannot be changed, neither can any fees be added.')}</li>
                    <li>{it.L('Multiple ads which are fully overlapping (e.g. using the same transaction limits, with the same price, in the same payment method category, in the same country) are not allowed.')}</li>
                </ol>
            </li>
            <br />
            <li>{it.L('Orders')}
                <ol>
                    <li>{it.L('Transactions are initiated by placing an order in response to ads posted by other users. By placing the order, you are making a binding contract and you are agreeing to the terms and conditions of the transaction (such as exchange rate and terms of payment) as determined by the advertiser to whom you are sending the order.')}</li>
                    <li>{it.L('You recognise that an order should only be submitted after careful consideration and understand and accept the consequences of its execution.')}</li>
                    <li>{it.L('You realise that a sell order calls for even more care than a buy order because as soon as a sell order is executed, this action is irreversible and may not be cancelled.')}</li>
                    <li>{it.L('You understand that you need to stay active and responsive when you create an order or when an order is created in response to your advertisement. You also undertake to provide true and accurate information (including but not limited to confirmation of receiving funds) in each transaction in which you engage. If you do not follow either of these terms, we reserve the right to take actions against you, such as temporarily or permanently restricting your access to the service.')}</li>
                </ol>
            </li>
            <br />
            <li>{it.L('Exchanges')}
                <ol>
                    <li>{it.L('You acknowledge and agree that in all stages of exchange, you are engaging in an exchange with another P2P Cashier user, and we are acting only as a provider of technical services, not as the counterparty to any exchange. Therefore, if any dispute or potential dispute is caused by an exchange or in connection to it, we shall not be liable to you, the other user, or any other person.')}</li>
                    <li>{it.L('When you are selling Deriv credits, it is your responsibility to check that you have received payment for the full amount and that it was made according to the instructions you have given to the buyer.')}</li>
                    <li>{it.L('We will take reasonable steps to facilitate the execution of all transactions supported by P2P Cashier. However, there may be times that due to reasons beyond our control, including but not limited to the failure of software, hardware, and internet connection, a transaction that you request is not successfully executed. You acknowledge that we are in no way liable for your failed transactions.')}</li>
                    <li>{it.L('If we know, or have reason to believe, that a transaction is in any way connected to fraud, money laundering, or any other prohibited activity, we have the right to cancel the transaction.')}</li>
                    <li>{it.L('You understand and agree that if you’re a buyer, you must never click on “I’ve paid” if your payment is incomplete since this is considered a malicious act. If there is any complaint against you that you have made a malicious confirmation of payment, the seller can ask for a return of the Deriv credits released to you.')}</li>
                </ol>
            </li>
        </ol>
        
        <h2 data-anchor='p2p-dispute'>{it.L('P2P Cashier complaints and disputes')}</h2>
        <p>{it.L('Dispute initiation')}</p>
        <ol>
            <li>{it.L('If you are in disagreement over a transaction, either you, the other party, or we can start a dispute until at most 30 days from the date of the transaction. Our support staff, whom you can reach by complaints@deriv.com, facilitate reviewing and resolving the disputed transactions.')}</li>
            <li>{it.L('Reviewing and resolving disputes may require reviewing communications between the buyer and the seller. If any part of this communication has taken place on our platform, it is not considered private communication. You hereby acknowledge and give consent that we are also a party to any communication that takes place on our platform and may access and otherwise process it in accordance with our <a href="https://www.deriv.com/Security%20and%20privacy_Version4.0.0.pdf" target="_blank">Security and privacy policy.</a>')}</li>
            <li>{it.L('In the course of a dispute investigation, we may ask one or both parties to the dispute to provide records of their communications with each other that have not occured on our platform.')}</li>
        </ol>

        <p>{it.L('Dispute review')}</p>
        <ol>
            <li>{it.L('During a dispute review, our support staff may give you instructions that you are required to follow. The instructions given to you may require you to provide proof of payment, proof that you have or have not received payment (including but not limited to bank transaction history), additional ID verification, photo, audio, or video evidence, or any other documents that we consider relevant. Failure to follow the instructions may lead to the dispute being resolved against you.')}</li>
        </ol>

        <p>{it.L('Dispute resolution')}</p>
        <ol>
            <li>{it.L('A disputed transaction is most commonly resolved by our support staff moving the disputed amount to the buyer or the seller of the disputed transaction once the dispute resolution criteria are met.')}</li>
            <li>{it.L('You must be able to provide a response to a request from our support staff in a disputed transaction within 24 hours or you may be considered unresponsive and the dispute may be resolved against you for this reason alone.')}</li>
            <li>{it.L('We can resolve a disputed transaction in your favour as a buyer when at least one of the following criteria is met:')}
                <ol className='alpha'>
                    <li>{it.L('You have made payment according to the instructions provided by the seller in the ad payment details, and you have provided sufficient proof that the payment was made according to these instructions.')}</li>
                    <li>{it.L('The seller has become unresponsive.')}</li>
                </ol>
            </li>
            <li>{it.L('We can resolve a disputed transaction in your favour as a seller when at least one of the following criteria is met:')}
                <ol className='alpha'>
                    <li>{it.L('The buyer has not provided payment or has not provided payment in full.')}</li>
                    <li>{it.L('The payment made by the buyer has been held/frozen/stopped by the payment provider.')}</li>
                    <li>{it.L('The buyer has not provided payment according to the instructions you have provided to them in the ad payment details.')}</li>
                    <li>{it.L('The buyer has become unresponsive.')}</li>
                </ol>
            </li>
            <li>{it.L('If either party to a disputed transaction provides fraudulent information or fraudulent documents or makes false claims or otherwise tries to force a certain outcome of a disputed transaction, the dispute may be immediately resolved against that party.')}</li>
        </ol>

        <h2 data-anchor='p2p-termination'>{it.L('Termination')}</h2>
        <ol>
            <li>{it.L('If any of the conditions below or any of the conditions for suspension or termination of services mentioned in our [General terms of use] is true, we reserve the right to restrict, suspend, or terminate your use of P2P Cashier, which might include but not be limited to temporarily or permanently revoking your authorisation to post ads on the P2P Cashier platform:')}
                <ol>
                    <li>{it.L('If we suspect fraud or other illegal conduct or unlawful activities in relation to the use(s) you make of the P2P Cashier')}</li>
                    <li>{it.L('If we know, or have reasons to believe, that you have used P2P Cashier irresponsibly or maliciously, including but not limited to the following situations:')}
                        <ol>
                            <li>{it.L('Not confirming a payment that has been made in response to your ad')}</li>
                            <li>{it.L('Not making payment within the two-hour lifespan of your buy order')}</li>
                            <li>{it.L('Clicking on ‘I’ve paid’ as a buyer without making complete, accurate payment')}</li>
                        </ol>
                    </li>
                </ol>
            </li>
        </ol>
    </div>
);

export default TermsAndConditions;
