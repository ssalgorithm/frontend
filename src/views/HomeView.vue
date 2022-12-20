<template>
    <div>
        <input type="text" v-model="keyword" placeholder="문제를 검색해보세요"/>
        <button class="primary" @click="searchProblem">검색</button>
        <div v-if="errorMsg">검색 결과가 없습니다.</div>
        <div v-else>
            <div>문제 이름: {{title}}</div>
            <div>문제 티어: {{level}}</div>
            <div>태그</div>
            <div v-for="(tag,i) in tags" :key="i">
                <p>{{tag.displayNames[0].name}}</p>
            </div>
        </div>
    </div>
</template>

<script>

import {solvedacAPI} from "@/api/solvedac.js";

export default {
    data() {
        return {
            keyword: "",
            title: "",
            level: "",
            tags: [],
            errorMsg: "",
        }
    },

    mounted() {
    },

    methods: {
        searchProblem() {
            solvedacAPI().get("/problem/show?problemId="+this.keyword)
            .then(({data}) => {
                this.errorMsg="";
                this.title = data.titleKo;
                this.level = data.level;
                this.tags = data.tags;
            })
            .catch(() => {
                this.errorMsg = "검색결과가 없습니다."
            });
        }
    }
}
</script>

<style>

</style>