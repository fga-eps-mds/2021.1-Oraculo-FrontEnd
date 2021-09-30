export class User {
    constructor(name, password, department, section, level) {
        this.name = name;
        this.password = password;
        this.departmentID = department;
        this.sectionID = section;
        this.level = level;
    }

    isValid() {}
}
