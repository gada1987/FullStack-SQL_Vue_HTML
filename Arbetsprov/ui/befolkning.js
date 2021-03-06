const befolkning={template:`
<div>

<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
 Skapa ett nytt 
</button>

<table class="table table-striped">
<thead>
    <tr>
        <th>
        <div class="d-flex flex-row">

        <input class="form-control m-2"
            v-model="IdFilter"
            v-on:keyup="FilterFn()"
            placeholder="Sortera Efter Id">

            <button type="button" class="btn btn-light"
            @click="sortResult('id',true)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
            </svg>
            </button>

            <button type="button" class="btn btn-light"
            @click="sortResult('id',false)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
            <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
            </svg>
            </button>
        </div>
             Id
        </th>
        <th>
        <div class="d-flex flex-row">
        <input class="form-control m-2"
                v-model="RegionNamnFilter"
                v-on:keyup="FilterFn()"
                placeholder="Sortera Efter Region Namn">
                
                <button type="button" class="btn btn-light"
                @click="sortResult('region',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('region',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>

            </div>
            RegionNamn
        </th>
        <th>
        <div class="d-flex flex-row">

        <input class="form-control m-2"
            v-model="k??nFilter"
            v-on:keyup="FilterFn()"
            placeholder="Sortera Efter K??n">

            <button type="button" class="btn btn-light"
            @click="sortResult('k??n',true)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
            </svg>
            </button>

            <button type="button" class="btn btn-light"
            @click="sortResult('k??n',false)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
            <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
            </svg>
            </button>
        </div>
            K??n
        </th>
        <th>
        <div class="d-flex flex-row">

        <input class="form-control m-2"
            v-model="??r16Filter"
            v-on:keyup="FilterFn()"
            placeholder="Sortera Efter Antal F??dda ??r 16">

            <button type="button" class="btn btn-light"
            @click="sortResult('??r2016',true)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
            </svg>
            </button>

            <button type="button" class="btn btn-light"
            @click="sortResult('??r2016',false)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
            <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
            </svg>
            </button>
        </div>
            ??r-16
        </th>
        <th>
        <div class="d-flex flex-row">

        <input class="form-control m-2"
            v-model="??r17Filter"
            v-on:keyup="FilterFn()"
            placeholder="Sortera Efter Antal F??dda ??r 17">

            <button type="button" class="btn btn-light"
            @click="sortResult('??r2017',true)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
            </svg>
            </button>

            <button type="button" class="btn btn-light"
            @click="sortResult('??r2017',false)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
            <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
            </svg>
            </button>
        </div>
            ??r-17
        </th>
         <th>
         <div class="d-flex flex-row">

        <input class="form-control m-2"
            v-model="??r18Filter"
            v-on:keyup="FilterFn()"
            placeholder="Sortera Efter Antal F??dda ??r 18">

            <button type="button" class="btn btn-light"
            @click="sortResult('??r2018',true)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
            </svg>
            </button>

            <button type="button" class="btn btn-light"
            @click="sortResult('??r2018',false)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
            <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
            </svg>
            </button>
        </div>
           ??r-18
        </th>
        <th>
        <div class="d-flex flex-row">

        <input class="form-control m-2"
            v-model="??r19Filter"
            v-on:keyup="FilterFn()"
            placeholder="Sortera Efter Antal F??dda ??r 19">

            <button type="button" class="btn btn-light"
            @click="sortResult('??r2019',true)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
            </svg>
            </button>

            <button type="button" class="btn btn-light"
            @click="sortResult('??r2019',false)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
            <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
            </svg>
            </button>
        </div>
           ??r-19
        </th>
        <th>
        <div class="d-flex flex-row">

        <input class="form-control m-2"
            v-model="??r20Filter"
            v-on:keyup="FilterFn()"
            placeholder="Sortera Efter Antal F??dda ??r 20">

            <button type="button" class="btn btn-light"
            @click="sortResult('??r2020',true)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
            </svg>
            </button>

            <button type="button" class="btn btn-light"
            @click="sortResult('??r2020',false)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
            <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
            </svg>
            </button>
        </div>
           ??r-20
        </th>
        <th>
            Options
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="bef in befolkning">
        <td>{{bef.id}}</td>
        <td>{{bef.region}}</td>
        <td>{{bef.k??n}}</td>
        <td>{{bef.??r2016}}</td>
        <td>{{bef.??r2017}}</td>
        <td>{{bef.??r2018}}</td>
        <td>{{bef.??r2019}}</td>
        <td>{{bef.??r2020}}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(bef)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button type="button" @click="deleteClick(bef.id)"
            class="btn btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

        </td>
    </tr>
</tbody>
</thead>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>

    <div class="modal-body">
    <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 w-50 bd-highlight">
        <div class="input-group mb-3">
    <span class="input-group-text">Id</span>
    <input type="text" class="form-control" v-model="id">
           </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Region Namn</span>
                <input type="text" class="form-control" v-model="region">
            </div>
            <div class="input-group mb-3">
            <span class="input-group-text">K??n</span>
            <input type="text" class="form-control" v-model="k??n">
        </div>
        <div class="input-group mb-3">
        <span class="input-group-text">F??dda-16</span>
        <input type="text" class="form-control" v-model="??r2016">
    </div>
    
<div class="input-group mb-3">
<span class="input-group-text">F??dda-17</span>
<input type="text" class="form-control" v-model="??r2017">
</div>
<div class="input-group mb-3">
<span class="input-group-text">F??dda-18</span>
<input type="text" class="form-control" v-model="??r2018">
</div>
<div class="input-group mb-3">
<span class="input-group-text">F??dda-19</span>
<input type="text" class="form-control" v-model="??r2019">
</div>
<div class="input-group mb-3">
<span class="input-group-text">F??dda-20</span>
<input type="text" class="form-control" v-model="??r2020">
</div>


         </div>
        
    </div>
        <button type="button" @click="createClick()"
         class="btn btn-primary">
        Create
        </button>
        <button type="button" @click="updateClick()"
         class="btn btn-primary">
        Update
        </button>

    </div>

</div>
</div>
</div>


</div>


`,

data(){
    return{
       
        befolkning:[],
        modalTitle:"",
        id:0,
        region:"",
        k??n:"",
        ??r2016:"",
        ??r2017:"",
        ??r2018:"",
        ??r2019:"",
        ??r2020:"",
        IdFilter: "",
        RegionNamnFilter:"",
        k??nFilter:"",
        ??r16Filter: "",
        ??r17Filter: "",
        ??r18Filter: "",
        ??r19Filter: "",
        ??r20Filter: "",
        befolkningWithoutFilter:[]

    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL)
        .then((response)=>{
            this.befolkning=response.data;
            this.befolkningWithoutFilter= response.data;
        });
    },
    addClick(){
        this.modalTitle="Skapa";
        this.id=0;
        this.region="";
        this.k??n="",
        this.??r2016="",
        this.??r2017="",
        this.??r2018="",
        this.??r2019="",
        this.??r2020=""
       
    },
    editClick(bef){
        this.modalTitle="Redigera";
        this.id=bef.id;
        this.region=bef.region;
        this.k??n=bef.k??n,
        this.??r2016=bef.??r2016,
        this.??r2016=bef.??r2017,
        this.??r2016=bef.??r2018,
        this.??r2016=bef.??r2019,
        this.??r2016=bef.??r2020
     },
    createClick(){
        axios.post(variables.API_URL,{
            id:this.id,
            region:this.region,
            k??n:this.k??n,
            ??r2016:this.??r2016,
            ??r2017:this.??r2017,
            ??r2018:this.??r2018,
            ??r2019:this.??r2019,
            ??r2020:this.??r2020
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    updateClick(){
        axios.put(variables.API_URL,{
            id:this.id,
            region:this.region,
            k??n:this.k??n,
            ??r2016:this.??r2016,
            ??r2017:this.??r2017,
            ??r2018:this.??r2018,
            ??r2019:this.??r2019,
            ??r2020:this.??r2020
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    deleteClick(id){
        if(!confirm("??r du s??ker?")){
            return;
        }
        axios.delete(variables.API_URL+"/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });

    },
    
FilterFun(){
    var IdFilter= this.IdFilter;
    var RegionNamnFilter = this.RegionNamnFilter;
    var k??nFilter = this.k??nFilter;
    var ??r16Filter= this.??r16Filter;
    var ??r17Filter= this.??r17Filter;
    var ??r18Filter= this.??r18Filter;
    var ??r19Filter= this.??r19Filter;
    var ??r20Filter= this.??r20Filter;
    this.befolkning= this.befolkningWithoutFilter.filter(
        function(el){
         return el.id.toString().toLowerCase().includes(IdFilter.toString().trim().toLowerCase()
         )&& el.region.toString().toLowerCase().includes(RegionNamnFilter.toString().trim().toLowerCase()
         )&& el.k??n.toString().toLowerCase().includes(k??nFilter.toString().trim().toLowerCase()
         )&& el.??r2016.toString().toLowerCase().includes(??r16Filter.toString().trim().toLowerCase()
         )&& el.??r2017.toString().toLowerCase().includes(??r17Filter.toString().trim().toLowerCase()
         )&& el.??r2018.toString().toLowerCase().includes(??r18Filter.toString().trim().toLowerCase()
         )&& el.??r2019.toString().toLowerCase().includes(??r19Filter.toString().trim().toLowerCase()
         )&& el.??r2020.toString().toLowerCase().includes(??r20Filter.toString().trim().toLowerCase())
        }
    );
},
sortResult(prop,asc){
    this.befolkning=this.befolkningWithoutFilter.sort(function(a,b){
        if(asc){
            return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
        }
        else{
            return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
        }
    })
}
},
mounted:function(){
    this.refreshData();
}

}
