                               Gma gpa
                            / /   \   
                        aunt uncle   mom
                                     / \
                                    me  sis
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.children = [];
    }
    addChild(child) {
        this.children.push(child);
    }
}                                   

class FamilyTree {
    constructor() {
        this.members = [];
    }
    addMember(member) {
        this.members.push(member);
    }
}