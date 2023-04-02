"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[9600],{56856:(H,C,n)=>{n.d(C,{Z:()=>b});var e=n(67294),a=n(49656),A=n(45697),t=n.n(A),s=n(28702),l=n(95489),R=n(41363),D=n(97132);const k=({tokenName:o,onClickDelete:c,tokenType:E})=>{const{formatMessage:d}=(0,D.useIntl)(),{trackUsage:f}=(0,l.useTracking)(),[u,p]=(0,e.useState)(!1),h=()=>{p(!1),f("willDeleteToken",{tokenType:E}),c()};return e.createElement(s.Box,{paddingLeft:1,onClick:T=>T.stopPropagation()},e.createElement(s.IconButton,{onClick:()=>{p(!0)},label:d({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${o}`}),name:"delete",noBorder:!0,icon:e.createElement(R.Trash,null)}),e.createElement(l.ConfirmDialog,{onToggleDialog:()=>p(!1),onConfirm:h,isOpen:u}))};k.propTypes={tokenName:t().string.isRequired,onClickDelete:t().func.isRequired,tokenType:t().string.isRequired};const L=k;var W=n(71893);const w={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},U=(0,W.default)(l.Link)`
  svg {
    path {
      fill: ${({theme:o})=>o.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:o})=>o.colors.neutral800};
      }
    }
  }
`,g=({tokenName:o,tokenId:c,buttonType:E,children:d})=>{const{formatMessage:f}=(0,D.useIntl)(),{location:{pathname:u}}=(0,a.useHistory)();return e.createElement(U,{to:`${u}/${c}`,title:f(w[E],{target:o})},d)};g.propTypes={tokenName:t().string.isRequired,tokenId:t().oneOfType([t().string,t().number]).isRequired,buttonType:t().string,children:t().node.isRequired},g.defaultProps={buttonType:"edit"};const I=g,S=({tokenName:o,tokenId:c})=>e.createElement(I,{tokenName:o,tokenId:c},e.createElement(R.Pencil,null));S.propTypes={tokenName:t().string.isRequired,tokenId:t().oneOfType([t().string,t().number]).isRequired};const Z=S,M=({tokenName:o,tokenId:c})=>e.createElement(I,{tokenName:o,tokenId:c,buttonType:"read"},e.createElement(R.Eye,null));M.propTypes={tokenName:t().string.isRequired,tokenId:t().oneOfType([t().string,t().number]).isRequired};const V=M,m=({permissions:o,headers:c,contentType:E,isLoading:d,tokens:f,onConfirmDelete:u,tokenType:p})=>{const{canDelete:h,canUpdate:T,canRead:N}=o,P=h||T||N,[{query:y}]=(0,l.useQueryParams)(),[,v]=y?y.sort.split(":"):"ASC",{push:x,location:{pathname:B}}=(0,a.useHistory)(),{trackUsage:F}=(0,l.useTracking)(),O=f.sort((r,$)=>{const i=r.name.localeCompare($.name);return v==="DESC"?-i:i});return e.createElement(l.DynamicTable,{headers:c,contentType:E,rows:f,withBulkActions:P,isLoading:d,onConfirmDelete:u},e.createElement(s.Tbody,null,O.map(r=>e.createElement(s.Tr,{key:r.id,...(0,l.onRowClick)({fn(){F("willEditTokenFromList",{tokenType:p}),x(`${B}/${r.id}`)},condition:T})},e.createElement(s.Td,{maxWidth:(0,l.pxToRem)(250)},e.createElement(s.Typography,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0},r.name)),e.createElement(s.Td,{maxWidth:(0,l.pxToRem)(250)},e.createElement(s.Typography,{textColor:"neutral800",ellipsis:!0},r.description)),e.createElement(s.Td,null,e.createElement(s.Typography,{textColor:"neutral800"},e.createElement(l.RelativeTime,{timestamp:new Date(r.createdAt)}))),e.createElement(s.Td,null,r.lastUsedAt&&e.createElement(s.Typography,{textColor:"neutral800"},e.createElement(l.RelativeTime,{timestamp:new Date(r.lastUsedAt)}))),P&&e.createElement(s.Td,null,e.createElement(s.Flex,{justifyContent:"end"},T&&e.createElement(Z,{tokenName:r.name,tokenId:r.id}),!T&&N&&e.createElement(V,{tokenName:r.name,tokenId:r.id}),h&&e.createElement(L,{tokenName:r.name,onClickDelete:()=>u(r.id),tokenType:p})))))))};m.propTypes={tokens:t().array,permissions:t().shape({canRead:t().bool,canDelete:t().bool,canUpdate:t().bool}).isRequired,headers:t().arrayOf(t().shape({cellFormatter:t().func,key:t().string.isRequired,metadatas:t().shape({label:t().string.isRequired,sortable:t().bool}).isRequired,name:t().string.isRequired})),contentType:t().string.isRequired,isLoading:t().bool,onConfirmDelete:t().func,tokenType:t().string.isRequired},m.defaultProps={tokens:[],headers:[],isLoading:!1,onConfirmDelete(){}};const b=m},47670:(H,C,n)=>{n.d(C,{Z:()=>e,f:()=>a});const e="api-token",a="transfer-token"},70798:(H,C,n)=>{n.r(C),n.d(C,{default:()=>M});var e=n(67294),a=n(95489),A=n(87751),t=n(97132),s=n(23724),l=n(49656),R=n(80129),D=n.n(R),k=n(28702),L=n(41363);const w=[{name:"name",key:"name",metadatas:{label:{id:"Settings.tokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.tokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}];var U=n(56856),g=n(47670);const S=()=>{(0,a.useFocusWhenNavigate)();const V=(0,s.useQueryClient)(),{formatMessage:m}=(0,t.useIntl)(),b=(0,a.useNotification)(),{allowedActions:{canCreate:o,canDelete:c,canUpdate:E,canRead:d}}=(0,a.useRBAC)(A.Z.settings["transfer-tokens"]),{push:f}=(0,l.useHistory)(),{trackUsage:u}=(0,a.useTracking)(),{startSection:p}=(0,a.useGuidedTour)(),h=(0,e.useRef)(p),{get:T,del:N}=(0,a.useFetchClient)();(0,e.useEffect)(()=>{h.current&&h.current("transferTokens")},[]),(0,e.useEffect)(()=>{f({search:D().stringify({sort:"name:ASC"},{encode:!1})})},[f]);const P=w.map(i=>({...i,metadatas:{...i.metadatas,label:m(i.metadatas.label)}})),{data:y,status:v,isFetching:x}=(0,s.useQuery)(["transfer-tokens"],async()=>{u("willAccessTokenList",{tokenType:g.f});const{data:{data:i}}=await T("/admin/transfer/tokens");return u("didAccessTokenList",{number:i.length,tokenType:g.f}),i},{enabled:d,onError(){b({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),B=d&&(v!=="success"&&v!=="error"||v==="success"&&x),F=(0,s.useMutation)(async i=>{await N(`/admin/transfer/tokens/${i}`)},{async onSuccess(){await V.invalidateQueries(["transfer-tokens"])},onError(i){i?.response?.data?.data?b({type:"warning",message:i.response.data.data}):b({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),O=d&&y,r=d&&!y&&!o,$=d&&!y&&o;return e.createElement(k.Main,{"aria-busy":B},e.createElement(a.SettingsPageTitle,{name:"Transfer Tokens"}),e.createElement(k.HeaderLayout,{title:m({id:"Settings.transferTokens.title",defaultMessage:"Transfer Tokens"}),subtitle:m({id:"Settings.transferTokens.description",defaultMessage:'"List of generated transfer tokens"'}),primaryAction:o?e.createElement(a.LinkButton,{"data-testid":"create-transfer-token-button",startIcon:e.createElement(L.Plus,null),size:"S",onClick:()=>u("willAddTokenFromList",{tokenType:g.f}),to:"/settings/transfer-tokens/create"},m({id:"Settings.transferTokens.create",defaultMessage:"Create new Transfer Token"})):void 0}),e.createElement(k.ContentLayout,null,!d&&e.createElement(a.NoPermissions,null),O&&e.createElement(U.Z,{permissions:{canRead:d,canDelete:c,canUpdate:E},headers:P,contentType:"trasfer-tokens",rows:y,isLoading:B,onConfirmDelete:i=>F.mutateAsync(i),tokens:y,tokenType:g.f}),$&&e.createElement(a.NoContent,{content:{id:"Settings.transferTokens.addFirstToken",defaultMessage:"Add your first Transfer Token"},action:e.createElement(k.Button,{variant:"secondary",startIcon:e.createElement(L.Plus,null)},m({id:"Settings.transferTokens.addNewToken",defaultMessage:"Add new Transfer Token"}))}),r&&e.createElement(a.NoContent,{content:{id:"Settings.transferTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})))},M=()=>e.createElement(a.CheckPagePermissions,{permissions:A.Z.settings["transfer-tokens"].main},e.createElement(S,null))}}]);
