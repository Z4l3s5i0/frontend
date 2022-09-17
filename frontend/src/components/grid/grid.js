import React, {Component} from "react";
import styled from "styled-components";

export default class NFTMarketRoot1 extends Component {
        constructor(props) {
                super(props);
        }

        render() {
                return (
                    <div>
                        {this.props.nfts.map((nft, i) => (
                            <NFTCard>
                            <Image1 src= {
                            `https://file.rendit.io/n/3xHmM9Hj15Ok4Ql1dPMu.png`
                        }
                            />
                            <Description>
                            <Name1>
                            <CollectionName>
                            <Verified
                            src={`https://file.rendit.io/n/d6yCtNVVJKFzonjZmm3c.svg`}
                            />
                            <Text1>Velosiraptor</Text1>
                            </CollectionName>
                            <Text2>{nft}</Text2>
                            </Name1>
                            <NFTPrice>
                            <VelasIcon
                            src={`https://file.rendit.io/n/xV9dT9wbXUSGIa6u2XOr.svg`}
                            />
                            <Text3>1.3458</Text3>
                            </NFTPrice>
                            </Description>
                            </NFTCard>
                            ))}
                    </div>

                )
        }
}



                const NFTRow = styled.div`
                gap: 20px;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-self: stretch;
                align-items: flex-end;
                `;
                const NFTCard = styled.div`
                width: 260px;
                gap: 8px;
                display: flex;
                flex-grow: 1;
                flex-direction: column;
                justify-content: flex-start;
                align-self: stretch;
                align-items: flex-start;
                border-style: solid;
                border-color: #cac9cc;
                border-radius: 18px;
                padding: 7px;
                border-width: 1px;
                `;
                const Image1 = styled.img`
                height: 215px;
                flex-grow: 1;
                align-self: stretch;
                `;
                const Description = styled.div`
                gap: 16px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-self: stretch;
                align-items: flex-start;
                padding: 23px 11px;
                `;
                const Name1 = styled.div`
                gap: 4px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-self: stretch;
                align-items: flex-start;
                `;
                const CollectionName = styled.div`
                gap: 8px;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-self: stretch;
                align-items: center;
                `;
                const Verified = styled.img`
                width: 24px;
                height: 24px;
                `;
                const Text1 = styled.div`
                width: 204px;
                flex-grow: 1;
                color: #9c9c9e;
                font-size: 18px;
                font-family: Inter;
                line-height: 22px;
                `;
                const Text2 = styled.div`
                align-self: stretch;
                color: #080808;
                font-size: 18px;
                font-weight: 600;
                font-family: Inter;
                line-height: 22px;
                `;
                const NFTPrice = styled.div`
                gap: 4px;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: flex-start;
                `;
                const VelasIcon = styled.img`
                width: 22px;
                height: 22px;
                `;
                const Text3 = styled.div`
                color: #080808;
                font-size: 18px;
                font-weight: 600;
                font-family: Inter;
                line-height: 22px;
                white-space: nowrap;
                `;
                const VelasIcon3 = styled.img`
                width: 0;
                height: 0;
                `;
                const NFTMarketRootRoot = styled.div`
                width: 868px;
                gap: 20px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                `;

