
import { Vue, Component } from 'vue-property-decorator';
import Router from '@/router/index';

@Component({
    name:"CommonMixin"
})
export default class CommonMixin extends Vue {
    public goBack(): void {
        Router.go(-1);
    }
}
