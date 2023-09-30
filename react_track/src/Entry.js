class Entry {
    constructor(company, job_title, description, status){
      this.company = company;
      this.job_title = job_title;
      this.description = description;
      this.status = status;
      const date = new Date();
      this.date_string = date.toDateString()
      this.id = date.toISOString();
    }
  }

export default Entry;