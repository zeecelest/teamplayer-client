import React from 'react';

function MemberAccount() {
    return (
    <>
            <section>
                <header>
                    <h3>Member Account</h3>
                </header>
                <div class="user-info">
                    <ul>
                        <li>User name</li>
                        <li>User email</li>
                    </ul>
                </div>
                <button type="submit" class="js-editUser">Edit</button>
            </section>
            <section>
                <header>
                    <h3>Members</h3>
                </header>
                <button type="submit" class="js-addMember">Add Member</button>
                <button type="submit" class="js-deleteMember">Delete Member</button>
                <div class="member-info">
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
                <button type="submit" class="js-send-message">Send Message</button>
                </section>
      </>
            )
};

export default MemberAccount;