import React, { useEffect, useState } from "react";
import { Table, Button, ButtonGroup, Modal } from "react-bootstrap";

function ItemDetailsTable() {
    const [items, setItems] = useState([]);
    const [additms, setAddItems] = useState({
        orderNo: '',
        partName: '',
        date: '',
        contNum: '',
        qty: '',
        per: '',
        rate: ''
    })
    const [itempop, setItemPop] = useState(false);

    useEffect(() => {
    }, [])

    const addAllitems = (e) => {
        setAddItems({ ...additms, [e.target.name]: e.target.value })
    }

    const gotomodal = () =>{
        setItemPop(true);
    }

    const itemsAddHandler = () => {
        items.push(additms);
        setItems([...items]);
        setAddItems({
            orderNo: '',
            date: '',
            partName: '',
            address: '',
            contNum: '',
            qty: '',
            per: '',
            rate: ''
        });
        setItemPop(false);
    }
    const cancelbtn = () =>{
        setItemPop(false);
    }

    return (
        <>
            <h5><u>Order Form</u></h5>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th><label className="col-6">Order No.</label><input type={'text'} name="orderNo" value={additms.orderNo} onChange={addAllitems} /></th>
                        <th><label className="col-6">Date</label><input type={'text'} name="date" value={additms.date} onChange={addAllitems} /></th>
                        <th><label className="col-6">Part Name</label><input type={'text'} name="partName" value={additms.partName} onChange={addAllitems} /></th>
                        <th><label className="col-6">Address</label><input type={'text'} name="address" value={additms.address} onChange={addAllitems} /></th>
                        <th><label className="col-6">Contact No.</label><input type={'text'} name="contNum" value={additms.contNum} onChange={addAllitems} /></th>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            <Button variant="primary" onClick={gotomodal}>Add Item</Button>
                        </td>
                    </tr>
                </thead>
            </Table>
            <br />
            {itempop &&
                <div>
                    <Modal.Dialog>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th colSpan={2}><label className="col-6">{additms.partName}</label></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type={'text'} name="qty" value={additms.qty} placeholder="QTY" onChange={addAllitems} /></td>
                                    <td><input type={'text'} name="per" value={additms.per} placeholder="Qty Per" onChange={addAllitems} /></td>
                                </tr>
                                <tr>
                                    <td><input type={'text'} name="rate" value={additms.rate} placeholder="Rate" onChange={addAllitems} /></td>
                                    <td><input type={'text'} name="total" value={additms.qty * additms.rate} placeholder="Total" onChange={addAllitems} /></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                    <ButtonGroup aria-label="Basic example">
                                        <Button variant="secondary" onClick={itemsAddHandler}>Submit</Button>
                                        <Button variant="secondary" onClick={cancelbtn}>Cancel</Button>
                                    </ButtonGroup>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Modal.Dialog>
                </div>
            }
            <h5>Order Detail</h5>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Per</th>
                        <th>Rate</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((itm) => {
                        return (
                            <tr key={itm.orderNo}>
                                <td>{itm.partName}</td>
                                <td>{itm.qty}</td>
                                <td>{itm.per}</td>
                                <td>{itm.rate}</td>
                                <td>{itm.qty * itm.rate}</td>
                                <td>
                                    <ButtonGroup aria-label="Basic example">
                                        <Button variant="secondary">Edit</Button>
                                        <Button variant="secondary">Delete</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        )
                    })
                    }

                </tbody>
            </Table>
            <div className="col-6">
                <Button variant="primary">Save</Button>
            </div>
        </>
    )
}

export default ItemDetailsTable;