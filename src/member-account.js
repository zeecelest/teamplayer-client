import React from 'react';
import { Link } from 'react-router-dom';

function MemberAccount() {
    return (
    <>
            <section>
                <header>
                    <h3>Member Account</h3>
                </header>
                <div className="user-info">
                    <ul>
                        <li>User name</li>
                        <li>User email</li>
                    </ul>
                </div>
                <button type="submit" className="js-editUser">Edit</button>
            </section>
            <section>
                <header>
                    <h3>Members</h3>
                </header>
                <button type="submit" className="js-addMember">Add Member</button>
                <button type="submit" className="js-deleteMember">Delete Member</button>
                <div className="member-info">
                    <ul>
                        <li>User names</li>
                        <li>User names</li>
                        <li>User names</li>
                    </ul>
                </div>
            </section>
            <section>
                <header>
                    <h3>Send Message</h3>
                </header>
                <Link to='/response-message'><button>Send Message</button></Link>
                </section>
      </>
            )
};

export default MemberAccount;