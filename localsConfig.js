export default function (mode) {
    return {
        pages_root_path: mode === 'development' ? '/' : '/test_order-page/',
        assets_root_path: mode === 'development' ? '/src/' : '/test_order-page/',
        link_to: '',
    }
}
